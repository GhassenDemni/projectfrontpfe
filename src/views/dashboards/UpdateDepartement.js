import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
import Userserivice from "../../services/userService";
import DepartementService from "../../services/departementService";
import axios from "axios";

function UpdateDepartement() {
  const location = useLocation();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [headOfDepartement, setHeadOfDepartement] = useState("");
  const [ListOfEmployers, setListOfEmployers] = useState([]);
  const [obj, setObj] = useState("");
  const [users, setusers] = useState([]);
  const user = new Userserivice();
  const departementService = new DepartementService();
  const navigate = useNavigate();

  console.log(obj, "SELET");

  useEffect(() => {
    getalluserfromback();
    setId(location.state.id);
    setId(location.state.id);
    getDepartementById(location.state.id);
  }, []);

  const getDepartementById = (id) => {
    departementService.FindById(id).then((res) => {
      console.log("Departement:", res.data);
      const { name, HeadOfDepartement, ListOfEmployers } = res.data;
      setName(res.data.data.name);
      setHeadOfDepartement(HeadOfDepartement[0].name); // Set the name of the first head of department found
      setListOfEmployers(ListOfEmployers);
    });
  };
  const getalluserfromback = () => {
    // nous allons importé les service a partire de userservice
    user.GetAll().then((res) => {
      setusers(res.data.data);
      console.log("***list emplpyers******", res.data.data);
      //   setId_Departement(res.data.data.Id_Departement);
      //   console.log("***depatrem******", res.data.data.Id_Departement);
    });
  };
  const updateDepartementFunction = async (e) => {
    e.preventDefault();
    const data = { name: name, HeadOfDepartement: obj };
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("HeadOfDepartement", obj);
    // formData.append("ListOfEmployers", ListOfEmployers);
    console.log("****obj*******", obj);
    console.log("user id", id);

    departementService.Update(id, data).then((res) => {
      console.log("Departement updated: ", res);
      navigate("/dashboards/dashboard1/ListOfDepartement");
    });

    // const updatedDep = await axios.patch(`http://localhost:3000/user/${id}`, {
    //   name,
    //   HeadOfDepartement: id,
    // });

    // console.log(updatedDep, "updatedDep");
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
              Modifier Departement
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
              label="Departement"
              type="text"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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

            <br></br>
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={updateDepartementFunction}
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
export default UpdateDepartement;
