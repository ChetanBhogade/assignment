import React, { useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { auth } from "../Config";
import axios from "axios";
import Cookies from "js-cookie";

function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const refresh = async (refreshToken) => {
    console.log("Refereshing token!");

    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:4000/refresh", { token: refreshToken })
        .then((data) => {
          if (data.data.success === true) {
            const { accessToken } = data.data;
            Cookies.set("access", accessToken);
            resolve(accessToken);
          } else {
            // set message err
            resolve(false);
          }
        });
    });
  };

  const requestLogin = async (accessToken, refreshToken) => {
    console.log("Requesting login..", accessToken, refreshToken);
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: "http://localhost:5000/posts",
        data: {},
        headers: { authorization: `Bearer ${accessToken}` },
      }).then(async (data) => {
        if (data.data.success === false) {
          if (data.data.status === 403) {
            // from above condition
            const accessToken = await refresh(refreshToken);
            return await requestLogin(accessToken, refreshToken);
          } else {
            resolve(false);
          }
        } else {
          if (data.data.success === true) {
            resolve(true);
          } else {
            resolve(false);
          }
          // props.history.push("/products");
        }
      });
    });
  };

  const hasAccess = async (accessToken, refreshToken) => {
    if (!refreshToken) return null;

    if (accessToken === undefined) {
      // generete new access token
      const accessToken = await refresh(refreshToken);
      return accessToken;
    }
    return accessToken;
  };

  const protect = async (e) => {
    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");

    accessToken = await hasAccess(accessToken, refreshToken);

    if (!accessToken) {
      // set message saying login again
    } else {
      await requestLogin(accessToken, refreshToken);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/login", { username: email })
      .then((data) => {
        const { accessToken, refreshToken } = data.data;

        Cookies.set("access", accessToken);
        Cookies.set("refresh", refreshToken);

        console.log("login data: - ", data.data);
      });
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     props.history.push("/products");
    //   })
    //   .catch((error) => {
    //     alert("Error: ", error.message);
    //   });
  };

  return (
    <div>
      <Container maxWidth="xs">
        <div className="paper">
          <Box boxShadow={3} bgcolor="background.paper" p={2} className="paper">
            <Avatar className="avatar">
              <LockIcon style={{ fontSize: 50 }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form
              className="myForm"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              noValidate
            >
              <Grid container={true} spacing={2}>
                <Grid item={true} xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    color="secondary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </div>
        <Button
          onClick={(e) => {
            protect(e);
          }}
          variant="contained"
        >
          protected content
        </Button>
      </Container>
    </div>
  );
}

export default SignInPage;
