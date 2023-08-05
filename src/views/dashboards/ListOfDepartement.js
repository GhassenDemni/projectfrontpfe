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
import { useNavigate } from "react-router-dom";
import DepartementService from "../../services/departementService";
// import Viewdepartement from "./Viewdepartement";

function ListOfDepartement() {
  const [name, setname] = useState("");
  const [HeadOfDepartement, setHeadOfDepartement] = useState([]);
  const [ListOfEmployers, setListOfEmployers] = useState([]);
  const [departement, setdepartement] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getalldeppartementfromback();
  }, []);

  const deppa = new DepartementService();
  useEffect(() => {
    getalldeppartementfromback();
  }, []);
  const getalldeppartementfromback = () => {
    // nous allons importer les services à partir de departementService
    deppa.GetAll().then((res) => {
      setdepartement(res.data.data);
      console.log("***liste des départements******", res.data.data);
      setHeadOfDepartement(res.data.data.HeadOfDepartement);
    });
  };

  const deleteDepartement = (id) => {
    console.log("ok supprimer", id);
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-le !",
    }).then((result) => {
      if (result.isConfirmed) {
        deppa.Remove(id).then((res) => {
          console.log(res.status);
          console.log("réponse", res);
          if (res.status === 200) {
            getalldeppartementfromback();
            Swal.fire("Supprimé !", "Votre fichier a été supprimé.", "Succès");
          }
        });
      }
    });
  };

  const Viewdepartement = (id) => {
    navigate("/dashboards/dashboard1/Viewdepartement/" + id, {
      state: { id: id },
    });
  };

  const Updatedepartement = (id) => {
    navigate("/dashboards/dashboard1/UpdateDepartement/" + id, {
      state: { id: id },
    });
  };
  const reservation = (id) => {
    deppa.reservation(id).then((res) => {
      console.log(
        "the correspondance location for this departement is:",
        res.data.data
      );

      var ir = res.data.data._id;
      navigate("/dashboards/dashboard1/ViewSallon/" + ir, {
        state: { id: ir },
      });
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
              num
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Nom de département
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Nombre des Employés
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
        {departement.map((ele, index) => (
          <TableRow key={ele._id}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {index + 1}
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
                    {ele.name}
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
            <TableCell>
              {ele.ListOfEmployers.map((employeeId) => (
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                  }}
                  color="textSecondary"
                  key={employeeId._id}
                >
                  {employeeId.name}
                </Typography>
              ))}
            </TableCell>

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
                onClick={(e) => Viewdepartement(ele._id)}
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
                onClick={(e) => Updatedepartement(ele._id)}
              ></Chip>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  // backgroundColor: "red",
                  color: "red",
                }}
                size="small"
                label="Delete"
                onClick={(e) => deleteDepartement(ele._id)}
              ></Chip>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  // backgroundColor: "red",
                  color: "black",
                }}
                size="small"
                label="Location"
                onClick={(e) => reservation(ele._id)}
              ></Chip>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ListOfDepartement;
