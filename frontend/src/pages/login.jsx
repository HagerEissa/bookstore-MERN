import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { useContext } from "react";
import { usersContext } from "../context/usersContextProvider";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { currentUser, isLoggedIn, login, register, logout } =
    useContext(usersContext);

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const role_id = await login(user);
      setUser({ email: "", password: "" })
      // console.log(role_id);

      if (role_id === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      // console.log("Login error:", error);
      setUser({ email: "", password: "" })
      setErr('')
      setErr(error);
    }
  };

  const handelReg = () => {
    navigate("/register");
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "250px",
          backgroundImage: 'url("/flowers.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2">My account</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: 5,
          width: "100%",
        }}
      >
        <Stack
          direction={"row"}
          spacing={5}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{backgroundColor: '#e0e0e0' }}
            ></Divider>
          }
          sx={{ maxWidth: "1000px", width: "100%", justifyContent: "center" }}
        >
          <Box
            width={500}
            margin="auto"
            mt={5}
            p={4}
            border="1px solid #ccc"
            borderRadius={3}
            boxShadow={3}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Sign in
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {err && (
              <Typography color="error" variant="body2" align="center">
                {err}
              </Typography>
            )}
            <form onSubmit={handelSubmit}>
              <Stack spacing={3}>
                <TextField
                  name="email"
                  value={user.email}
                  onChange={handelChange}
                  variant="outlined"
                  label="email address"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "30px" } }}
                  required
                ></TextField>
                <TextField
                  name="password"
                  value={user.password}
                  onChange={handelChange}
                  variant="outlined"
                  label="Password"
                  type="password"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "30px" } }}
                  required
                ></TextField>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(254,186,193)",
                    borderRadius: "20px ",
                    marginBottom: "20px",
                  }}
                >
                  LOG IN
                </Button>
                <Divider sx={{ mb: 3 }} />
              </Stack>
            </form>

            <Stack spacing={3} alignItems="center">
              <ManageAccountsOutlinedIcon
                fontSize="large"
                sx={{ color: "text.secondary" }}
              ></ManageAccountsOutlinedIcon>
              <Typography variant="body1" gutterBottom>
                No account yet?
              </Typography>
              <Button
                onClick={() => {
                  navigate("/register");
                }}
                variant="text"
                sx={{
                  color: "text.primary",
                  textDecoration: "underline",
                  textDecorationColor: "pink",
                  textDecorationThickness: "2px",
                }}
              >
                Create an Account
              </Button>
            </Stack>
          </Box>
          <Stack
            width={500}
            display="flex"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography variant="h4" color="text.primary">
              Register
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Registering for this site allows you to access your order status
              and history. Just fill in the fields below, and we'll get a new
              account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier.
            </Typography>
            <Button
              variant="contained"
              onClick={handelReg}
              sx={{
                backgroundColor: "rgb(254,186,193)",
                borderRadius: "20px ",
                marginBottom: "20px",
              }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
