import React, { useState } from "react";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { auth } from "../Config";

import "./SignUpPage.css";

function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmit = () => {
    if (password === cPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          props.history.push("/products");
        })
        .catch((error) => {
          console.log("Error Occur while signup - ", error.message);
        });
    } else {
      alert("Password and Confirm Password Should be Same");
    }
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
              onSubmit={() => {
                handleSubmit();
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
                  <TextField
                    id="cpassword"
                    name="cPassword"
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    value={cPassword}
                    onChange={(e) => {
                      setCPassword(e.target.value);
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <Button variant="contained" onClick={() => { handleSubmit() }} fullWidth color="secondary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default SignUpPage;
