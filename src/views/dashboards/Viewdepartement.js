import React, { useState, useEffect } from "react";
import DepartementService from "../../services/departementService";
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

function Viewdepartement() {
  const [id, setid] = useState();
  const [ListOfEmployers, setListOfEmployers] = useState([]);
  const [name, setName] = useState("");
  const [HeadOfDepartement, setHeadOfDepartement] = useState([]);
  const [departement, setdepartement] = useState([]);
  const dep = new DepartementService();
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id);
    console.log("the id is:", location.state.id);
    findDepbyID(location.state.id);
    // dep.FindById(location.state.id).then((res) => {
    //   setdepartement(res.data.data);
    //   console.log("*****fama liste departement****", res.data);
    //   setname(res.data.name);
    //   setListOfEmployers(res.data.ListOfEmployers);
    //   setHeadOfDepartement(res.data.HeadOfDepartement);

    //   console.log("name", res.data.name);
    //   console.log("ListOfEmployers", res.data.ListOfEmployers);
    //   console.log("HeadOfDepartement", res.data.HeadOfDepartement);

    //   //   if (departement && departement.length > 0) {
    //   //     console.log(departement[0]._id);
    //   //   } else {
    //   //     console.log("Le tableau 'departement' est vide");
    //   //   }
    // });
  }, []);

  const findDepbyID = (id) => {
    dep.FindById(id).then((res) => {
      console.log("ress is", res.data);
      setdepartement(res.data.data);
      setHeadOfDepartement(res.data.HeadOfDepartement);
      console.log("name is", res.data.data.name);
      setName(res.data.data.name);
      setListOfEmployers(res.data.data.ListOfEmployers);
    });
  };
  return (
    <div>
      <h1>
        Details of :<br></br>
        {/* {HeadOfDepartement ? HeadOfDepartement.name : ""} */}
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
                  departement Details
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
                ID_Departement
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Name_Departement
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                Name_Head
              </TableCell>
              <TableCell
                variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >
                NB_Employers
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{departement._id}</TableCell>
              {/* <TableCell><Avatar src={"http://localhost:3000/storages/" + user.photo}></Avatar></TableCell> */}
              <TableCell>{name}</TableCell>

              <TableCell>{departement.HeadOfDepartement}</TableCell>
              {/* <TableCell>{HeadOfDepartement}</TableCell> */}
              <TableCell>{ListOfEmployers.length}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  );
}
export default Viewdepartement;
