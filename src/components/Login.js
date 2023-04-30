
import React,{useState} from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
 const Login = (pops) => {

  const [email, setEmail] = useState("shivani@gmail.com");
  const [password, setPassword] = useState("shivani");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
     
// console.log("hellloo")
// navigate("/home")
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    if (email === "shivani@gmail.com" && password ==="shivani")  {
      navigate("/home")
    }else {
      alert("Invalid email or password");
    }
  };
 
// console.log("check",handleSubmit)

  return (
    <Container component="main" maxWidth="xs">
      <Box
      onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // href="Home"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
           
            <Grid item>
              <Link href="register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login