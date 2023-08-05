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

import SallonService from "../../services/sallonService";

function AddSallon() {
  const [nbplace, setnbplace] = useState("");
  const [name, setName] = useState("");

  const [description, setdescription] = useState("");

  const sallon = new SallonService();
  const navigate = useNavigate();

  const AddSallonFunction = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("nbplace", nbplace);

    sallon.Create(formData).then((res) => {
      console.log("sallon added: ", res);
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
              Ajouter Sallon
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
              id="email-text"
              label="Nombre de Place"
              type="text"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={nbplace}
              onChange={(e) => setnbplace(e.target.value)}
            />

            <TextField
              id="default-value"
              label="Description "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />

            <br></br>

            <br></br>
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={AddSallonFunction}
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
export default AddSallon;
