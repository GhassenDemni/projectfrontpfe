import React, { useState, useEffect } from "react";
import userService from "../../services/userService";
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
function ViewUsers() {
  const [id, setid] = useState();
  const [user, setuser] = useState([]);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const [photo, setphoto] = useState("");
  const us = new userService();
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id);
    
    // console.log("the id is:", location.state.id);
    us.FindById(location.state.id).then((res) => {
      setuser(res.data.data);
      setname(res.data.data.name);
      setemail(res.data.data.email);
      setrole(res.data.data.role);
      console.log("user", user);
      console.log("email", email);
      console.log("****winha liste fama*****", res.data.data);
    });
  }, []);
  return (
    <div>
      <h1>
        Profile of:
        <br></br>
        {user.name}
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
                  Customer Details
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
                Email
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Role
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{user._id}</TableCell>
              {/* <TableCell><Avatar src={"http://localhost:3000/storages/" + user.photo}></Avatar></TableCell> */}
              <TableCell>{user.photo}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  );
}
export default ViewUsers;
