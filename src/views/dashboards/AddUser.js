import React, { useState } from "react";
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
import Userserivice from "../../services/userService";

function AddUser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [adress, setadress] = useState("");
  const [salaire, setsalaire] = useState("");
  const [role, setrole] = useState("");
  const [photo, setphoto] = useState("");
  const [Id_Departement, setId_Departement] = useState("");

  const onFileChange = (event) => {
    setphoto(event.target.files[0]);
  };

  const user = new Userserivice();
  const navigate = useNavigate();

  const AddUserFunction = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("adress", adress);
    formData.append("role", role);
    formData.append("Id_Departement", Id_Departement);
    formData.append("photo", photo);

    user.Create(formData).then((res) => {
      console.log("User added: ", res);
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
              Ajouter Utilisateur
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
              id="default-value"
              label=" Name"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              id="email-text"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <TextField
              id="default-value"
              label="Role "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={role}
              onChange={(e) => setrole(e.target.value)}
            />
            <TextField
              id="country"
              label="Salaire"
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
              id="gender"
              label="Adress "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={adress}
              onChange={(e) => setadress(e.target.value)}
            />
            <TextField
              id="ID_Training"
              label="ID_Departement "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={Id_Departement}
              onChange={(e) => setId_Departement(e.target.value)}
            />

            <br></br>
            <div>
              <div calss="col-md-3">Picture</div>
              <div class="col-md-7">
                <input
                  type="file"
                  class="form-control"
                  onChange={onFileChange}
                />
              </div>
            </div>
            <br></br>
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={AddUserFunction}
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
export default AddUser;
