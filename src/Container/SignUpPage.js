import React from "react";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div>
      <Container maxWidth="xs" style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            marginTop: 10,
          }}>
        <div
          className="paper"
          
        >
          <Avatar className="avatar">
            <LockIcon style={{ fontSize: 50 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className="myForm" noValidate>
            <Grid container={true} spacing={2}>
              <Grid item={true} xs={6}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              </Grid>
              <Grid item={true} xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item={true} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item={true} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item={true} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignUpPage;
