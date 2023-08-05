import React, { useState, useEffect } from "react";
import SallonService from "../../services/sallonService";
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

function ViewSallon() {
  const [id, setid] = useState();
  const [nbplace, setnbplace] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState("");
  const [Sallon, setSallon] = useState([]);
  const sa = new SallonService();
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id);
    // console.log("the id is:", location.state.id);
    sa.FindById(location.state.id).then((res) => {
      setSallon(res.data.data);
      console.log("*****fala liste salle****", res.data.data);
      setname(res.data.data.name);
      setdescription(res.data.data.description);
      setnbplace(res.data.data.nbplace);

      console.log("name", name);
      console.log("nbplace", nbplace);
      console.log("description", description);
    });
  }, []);
  return (
    <div>
      <h1>
        Details of :<br></br>
        {Sallon.name}
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
                  Sallon Details
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
                Photo
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Name
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                descreption
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                place
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{Sallon._id}</TableCell>
              {/* <TableCell><Avatar src={"http://localhost:3000/storages/" + user.photo}></Avatar></TableCell> */}
              <TableCell>
                <Avatar
                // src={"http://localhost:3000/storages/" + user.photo}
                ></Avatar>
              </TableCell>
              <TableCell>{Sallon.name}</TableCell>
              <TableCell>{Sallon.description}</TableCell>
              <TableCell>{Sallon.nbplace}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  );
}
export default ViewSallon;
