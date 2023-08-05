import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import SallonService from "../../services/sallonService";
import { useNavigate } from "react-router-dom";
function ListeOfSallon() {
  const [name, setname] = useState("");
  const [nbplace, setnbplace] = useState("");
  const [description, setdescription] = useState("");
  const [Sallon, setSallon] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getallsallonfromback();
  }, []);
  const sa = new SallonService();
  useEffect(() => {
    getallsallonfromback();
  }, []);
  const getallsallonfromback = () => {
    // nous allons importé les service a partire de userservice
    sa.GetAll().then((res) => {
      setSallon(res.data.data);
      console.log("***list sallon******", res.data);
      setnbplace(res.data.setnbplace);
      //   setId_Departement(res.data.data.Id_Departement);
      console.log("***salle******", res.data.setnbplace);
    });
  };

  const deleteSallon = (id) => {
    console.log("ok supprimer", id);
    Swal.fire({
      title: "Vous-êtez sûr??",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "avertissement",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-le!",
    }).then((result) => {
      if (result.isConfirmed) {
        sa.Remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            getallsallonfromback();
            Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
          }
        });
      }
    });
  };
  const ViewSallon = (id) => {
    navigate("/dashboards/dashboard1/ViewSallon/" + id, { state: { id: id } });
  };
  const UpdateSallon = (id) => {
    navigate("/dashboards/dashboard1/UpdateSallon/" + id, {
      state: { id: id },
    });
  };
  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id_deppartement
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Nombre de Place
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Nom de La Salle
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Descreption
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Action
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Sallon.map((ele) => (
          <TableRow key={ele._id}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {ele._id}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {ele.nbplace}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  ></Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell> {ele.name}</TableCell>
            <TableCell> {ele.description}</TableCell>

            <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: "green",
                  color: "#fff",
                }}
                size="small"
                label="View"
                onClick={(e) => ViewSallon(ele._id)}
              ></Chip>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: "blue",
                  color: "#fff",
                }}
                size="small"
                label="Update"
                onClick={(e) => UpdateSallon(ele._id)}
              ></Chip>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: "red",
                  color: "#fff",
                }}
                size="small"
                label="Delete"
                onClick={(e) => deleteSallon(ele._id)}
              ></Chip>
            </TableCell>
            <TableCell align="right">
              {/* <Typography variant="h6">${product.budget}k</Typography> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ListeOfSallon;
