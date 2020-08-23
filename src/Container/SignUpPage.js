import React from "react";
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

import "./SignUpPage.css";

function SignUpPage() {
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
            <form className="myForm" noValidate>
              <Grid container={true} spacing={2}>
                <Grid item={true} xs={6}>
                  <TextField
                    id="fname"
                    label="First Name"
                    variant="outlined"
                    autoFocus
                    fullWidth
                  />
                </Grid>
                <Grid item={true} xs={6}>
                  <TextField
                    id="lname"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    id="email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    id="cpassword"
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <Button variant="contained" fullWidth color="secondary">
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
