import React, { useState, useEffect } from "react";
import PresenceService from "../../services/presenceService";
import { useLocation } from "react-router-dom";
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

function ViewPresence() {
  const [id, setid] = useState("");
  const [user, setuser] = useState({ });
  
  const [createdAt, setcreatedAt] = useState('')
  const [updatedAt, setupdatedAt] = useState("");
  const [presence, setpresence] = useState({});
  const pres = new PresenceService();
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id);
    console.log("the id is:", location.state.id);
    pres.FindById(location.state.id).then((res) => {
      setpresence(res.data);
      setuser(res.data.user);
      console.log("****winha liste fama*****", res.data);
  setuser(res.data.user);
  setcreatedAt(res.data.createdAt);
  setupdatedAt(res.data.updatedAt);
console.log("user", res.data.user);
console.log("createdAt", createdAt);
console.log("updatedate", updatedAt);


      // console.log("the id is:", location.state.id);
      // console.log("the id is:", location.state.id);
      
    });
  }, []);
  return (
    <div>
      <h1>
        Details of Presence:
        <br></br>
        {/* {presence._id} */}
      </h1>
      <div>
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
                  Presence Details
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                ID
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Nom d'Employés
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
               Email
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Salaire
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Date D'entré
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Date Sortie
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{presence._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.salaire}</TableCell>
              {/* <TableCell><Avatar src={"http://localhost:3000/storages/" + user.photo}></Avatar></TableCell> */}
              <TableCell>{presence.createdAt}</TableCell>
              <TableCell>{presence.updatedAt}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  );
}
export default ViewPresence;
