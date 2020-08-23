import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

function PaymentForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    const lastNumber = number.substr(number.length - 4);
    const payments = [
      { name: "Card holder", detail: name },
      { name: "Card number", detail: `xxxx-xxxx-xxxx-${lastNumber}` },
      { name: "Expiry date", detail: date },
    ];
    props.sendCard(payments)
  };
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            type="password"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <div className="myBtn">
        <Button onClick={props.handleBack} className="btnStyle">
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="btnStyle"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PaymentForm;
