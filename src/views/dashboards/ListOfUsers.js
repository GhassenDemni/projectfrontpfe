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
  Avatar,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import Userserivice from "../../services/userService";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
function ListOfUsers() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [adress, setadress] = useState("");
  const [role, setrole] = useState("");
  const [Id_Departement, setId_Departement] = useState([]);
  const [users, setusers] = useState([]);

  const us = new Userserivice();

  const navigate = useNavigate();
  useEffect(() => {
    getalluserfromback();
  }, []);
  const getalluserfromback = () => {
    // nous allons importé les service a partire de userservice
    us.GetAll().then((res) => {
      setusers(res.data.data);
      console.log("***list emplpyers******", res.data.data);
      //   setId_Departement(res.data.data.Id_Departement);
      //   console.log("***depatrem******", res.data.data.Id_Departement);
    });
  };

  const deleteClient = (id) => {
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
        us.remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            getalluserfromback();
            Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
          }
        });
      }
    });
  };
  const ViewUser = (id) => {
    navigate("/dashboards/dashboard1/ViewUsers/" + id, { state: { id: id } });
  };
  const Updateuser = (id) => {
    navigate("/dashboards/dashboard1/Updateuser/" + id, { state: { id: id } });
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
              Photo
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Role
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Email
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Salaire
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
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>
              <Avatar
              // src={"http://localhost:3000/storages/" + user.photo}
              ></Avatar>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {user._id}
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
                    {user.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {/* {product.post} */}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {user.email}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {user.salaire}
              </Typography>
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
                onClick={(e) => ViewUser(user._id)}
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
                onClick={(e) => Updateuser(user._id)}
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
                onClick={(e) => deleteClient(user._id)}
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

export default ListOfUsers;
