import React, { useState, useEffect } from "react";
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
import DepartementService from "../../../services/departementService";
import Userserivice from "../../../services/userService";
import SallonService from "../../../services/sallonService";

const ExTable = () => {
  const [departement, setdepartement] = useState([]);
  const [users, setusers] = useState([]);
  const [Sallon, setSallon] = useState([]);
  const [nbplace, setnbplace] = useState("");
  const [totalSalaire, settotalSalaire] = useState([]);
  let counter = 0;
  useEffect(() => {
    getalldeppartementfromback();
    getalluserfromback();
    getallsallonfromback();
    gettotalSalaire();
  }, []);

  const deppa = new DepartementService();
  const us = new Userserivice();
  const sa = new SallonService();
  const getalluserfromback = () => {
    // nous allons importé les service a partire de userservice
    us.GetAll().then((res) => {
      setusers(res.data.data);
      console.log("***list emplpyers******", res.data.data);
      //   setId_Departement(res.data.data.Id_Departement);
      //   console.log("***depatrem******", res.data.data.Id_Departement);
    });
  };
  const getalldeppartementfromback = () => {
    // nous allons importer les services à partir de departementService
    deppa.GetAll().then((res) => {
      setdepartement(res.data.data);
      console.log("***liste des départements******", res.data.data);
    });
  };
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

  const gettotalSalaire = () => {
    us.GetAll().then((res) => {
      setusers(res.data.data);
      console.log("***list salaire******", res.data.data);
      //   setId_Departement(res.data.data.Id_Departement);
      //   console.log("***depatrem******", res.data.data.Id_Departement);
      for (const obj of res.data.data) {
        console.log("ok", parseInt(obj.salaire));
        if (obj.salaire) {
          counter += parseInt(obj.salaire);
        }
      }
      settotalSalaire(counter);
      console.log("ok salaire", counter);
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
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Total
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Priority
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Départements</TableCell>
          <TableCell>{departement.length}</TableCell>
          <TableCell>
            <Chip
              sx={{
                pl: "4px",
                pr: "4px",
                backgroundColor: "orange",
                color: "#fff",
              }}
              size="small"
              label="1"
            ></Chip>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Personels</TableCell>
          <TableCell>{users.length}</TableCell>
          <TableCell>
            <Chip
              sx={{
                pl: "4px",
                pr: "4px",
                backgroundColor: "orange",
                color: "#fff",
              }}
              size="small"
              label="1"
            ></Chip>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Sallons</TableCell>
          <TableCell>{Sallon.length}</TableCell>
          <TableCell>
            <Chip
              sx={{
                pl: "4px",
                pr: "4px",
                backgroundColor: "orange",
                color: "#fff",
              }}
              size="small"
              label="1"
            ></Chip>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ExTable;
