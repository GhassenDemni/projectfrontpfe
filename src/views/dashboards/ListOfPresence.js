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
import PresenceService from "../../services/presenceService";
function ListOfPresence() {
  const [id, setid] = useState("");
  const [user, setuser] = useState([]);

  const [createdAt, setcreatedAt] = useState("");
  const [updatedAt, setupdatedAt] = useState("");
  const [presence, setpresence] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getallpresencefromback();
  }, []);

  const pres = new PresenceService();
  useEffect(() => {
    getallpresencefromback();
  }, []);
  const getallpresencefromback = () => {
    pres.GetAll().then((res) => {
      setpresence(res.data.data);
      console.log("***list presence******", res.data.data);
    });
  };

  const deletepresence = (id) => {
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
        pres.Remove(id).then((res) => {
          console.log(res.status);
          console.log("response", res);
          if (res.status === 200) {
            getallpresencefromback();
            Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
          }
        });
      }
    });
  };

  const ViewPresence = (id) => {
    navigate("/ViewUsers/" + id, { state: { id: id } });
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
              IdPresence
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              User
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Date
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
        {presence.map((ele) => (
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
                    {ele.user.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  ></Typography>
                </Box>
                <Box>
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
                    <td>
                      {new Date(ele.date).getDate() +
                        "-" +
                        (new Date(ele.date).getMonth() + 1) +
                        "-" +
                        new Date(ele.date).getFullYear() +
                        "     " +
                        new Date(ele.date).getHours() +
                        "h:" +
                        new Date(ele.date).getMinutes() +
                        "m"}
                    </td>
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  ></Typography>
                </Box>
                <Box>
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
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: "green",
                  color: "#fff",
                }}
                size="small"
                label="View Details User"
                onClick={(e) => ViewPresence(ele.user._id)}
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
                onClick={(e) => deletepresence(ele._id)}
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

export default ListOfPresence;
