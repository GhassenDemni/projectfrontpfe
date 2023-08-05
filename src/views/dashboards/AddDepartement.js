import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";

import DepartementService from "../../services/departementService";
import Userserivice from "../../services/userService";
function AddDepartement() {
  const [ListOfEmployers, setListOfEmployers] = useState([]);
  const [name, setName] = useState("");
  const [obj, setObj] = useState("");
  const [HeadOfDepartement, setHeadOfDepartement] = useState([]);
  const [users, setusers] = useState([]);
  const user = new Userserivice();

  const departement = new DepartementService();
  const navigate = useNavigate();

  const AddDepartementFunction = () => {
    console.log("of add dep ", obj);
    const formData = new FormData();
    // formData.append("ListOfEmployers", ListOfEmployers);
    formData.append("name", name);
    formData.append("HeadOfDepartement", obj);

    departement.Create(formData).then((res) => {
      console.log("Departement added: ", res);
      //    navigate("/dashboards/dashboard1/ListOfDepartement");
    });
  };

  useEffect(() => {
    getalluserfromback();
  }, []);
  const getalluserfromback = () => {
    // nous allons importé les service a partire de userservice
    user.GetAll().then((res) => {
      setusers(res.data.data);
      console.log("***list emplpyers******", res.data.data);
      //   setId_Departement(res.data.data.Id_Departement);
      //   console.log("***depatrem******", res.data.data.Id_Departement);
    });
  };
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Ajouter Departement
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="email-text"
              label="Name"
              type="text"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* 
            <TextField
              id="default-value"
              label="Liste des Employés "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={HeadOfDepartement}
              onChange={(e) => setHeadOfDepartement(e.target.value)}
            /> */}

            <br></br>
            <td>
              <select id="user" onChange={(e) => setObj(e.target.value)}>
                {users.map((user) => (
                  <option value={user._id} key={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </td>
            <br></br>
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={AddDepartementFunction}
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default AddDepartement;
