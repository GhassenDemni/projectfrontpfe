import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import AuthService from "../../services/authService";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const AuthSer = new AuthService();
  const AddLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    AuthSer.Login(data).then((res) => {
      console.log("then", res.data);
      if (res.data) {
        navigate("/dashboards/dashboard1");
      }
      //   else if (res.data.data.role === "admin") {
      //     navigate("/AllCars");
      //   }
    });
  };
  return (
    <div style={{ marginLeft: "15px" }}>
      <h2> LOGIN</h2>
      <br></br>
      <br></br>
      <form>
        <TextField
          id="default-value"
          label="Email"
          variant="outlined"
          defaultValue="user1"
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="default-value"
          label="Password"
          variant="outlined"
          defaultValue="user1"
          fullWidth
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button color="primary" variant="contained" onClick={AddLogin}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
