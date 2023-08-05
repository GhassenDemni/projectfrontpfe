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
import SallonService from "../../services/sallonService";
import { Description } from "@material-ui/icons";

function UpdateSallon() {
  const [Sallon, setSallon] = useState([]);
  const [nbplace, setnbplace] = useState();
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [id, setId] = useState("");

  const sallon = new SallonService();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setId(location.state.id);
    getsallonById(location.state.id);
  }, []);

  const getsallonById = (id) => {
    sallon.FindById(id).then((res) => {
      console.log("sallon:", res.data.data);
      //   const { name, nbplace, description } = res.data;
      setSallon(res.data.data);
      setname(res.data.data.name);
      setdescription(res.data.data.description); // Set the name of the first head of department found
      setnbplace(res.data.data.nbplace);
    });
  };
  // const getallsallonfromback = () => {
  //   // nous allons importé les service a partire de userservice
  //   sallon.GetAll().then((res) => {
  //     setSallon(res.data.data);
  //     console.log("***list sallon******", res.data.data);
  //     //   setId_Departement(res.data.data.Id_Departement);
  //     //   console.log("***depatrem******", res.data.data.Id_Departement);
  //   });
  // };
  const updatesallonFunction = () => {
    // e.preventDefault();

    const data = { name: name, description: description, nbplace: nbplace };
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("description", description);
    // formData.append("nbplace", nbplace);
    // formData.append("ListOfEmployers", ListOfEmployers);
    console.log("****name*******", name);
    console.log("********description********", description);
    console.log("********nbplace********", nbplace);
    sallon.Update(id, data).then((res) => {
      console.log("sallon updated: ", res);
      navigate("/dashboards/dashboard1/ListeOfSallon");
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
              Modifier Sallon
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
              label="Name Salle"
              type="text"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              id="email-text"
              label="Descreption"
              type="text"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <TextField
              id="email-text"
              label="nbplace"
              type="text"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={nbplace}
              onChange={(e) => setnbplace(e.target.value)}
            />
            {/* <td>
              <select id="user" onChange={(e) => setObj(e.target.value)}>
                {Sallon.map((user) => (
                  <option value={user._id} key={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </td> */}

            <br></br>

            <br></br>
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={updatesallonFunction}
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
export default UpdateSallon;
