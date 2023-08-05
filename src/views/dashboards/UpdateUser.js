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

function UpdateUser() {
  const location = useLocation();
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [adress, setadress] = useState("");
  const [salaire, setsalaire] = useState("");
  const [role, setrole] = useState("");
  const [photo, setphoto] = useState("");
  const [users, setusers] = useState([]);
  const [Id_Departement, setId_Departement] = useState("");

  const user = new Userserivice();
  const navigate = useNavigate();
  useEffect(() => {
    setid(location.state.id);
    getuseID(location.state.id);
  }, []);

  const getuseID = (id) => {
    user.FindById(id).then((res) => {
      console.log("++++++++++++++", res.data.data);
      setName(res.data.data.name);
      setemail(res.data.data.email);
      setrole(res.data.data.role);
      setsalaire(res.data.data.salaire);
    });
  };

  const updateuserFunction = () => {
    const formData = new FormData();
    // formData.append("ListOfEmployers", ListOfEmployers);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("role", role);
    formData.append("salaire", salaire);

    user.Update(id, formData).then((res) => {
      console.log("update user ", res);
      navigate("/dashboards/dashboard1/ListOfUsers");
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
              Modifier Employé
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

            <TextField
              id="default-value"
              label="email "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              id="default-value"
              label="salaire "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={salaire}
              onChange={(e) => setsalaire(e.target.value)}
            />
            <TextField
              id="default-value"
              label="rôle "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={role}
              onChange={(e) => setrole(e.target.value)}
            />

            <br></br>

            <br></br>
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={updateuserFunction}
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
export default UpdateUser;
