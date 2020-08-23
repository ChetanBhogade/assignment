import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

function AddressForm(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [addr1, setAddr1] = useState("");
  const [addr2, setAddr2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    const name = `${fname} ${lname}`;
    const finalAddress = [addr1, addr2, city, state, pin, country];
    props.sendName(name);
    props.sendAddress(finalAddress);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            fullWidth
            autoComplete="first-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            fullWidth
            autoComplete="last-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            value={addr1}
            onChange={(e) => {
              setAddr1(e.target.value);
            }}
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            value={addr2}
            onChange={(e) => {
              setAddr2(e.target.value);
            }}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
            }}
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>

      <div className="myBtn">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="btnStyle"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default AddressForm;
