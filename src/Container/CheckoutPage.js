import React, { useState } from "react";
import AddressForm from "../Components/AddressForm";
import PaymentForm from "../Components/PaymentForm";
import Review from "../Components/Review";
import {
  makeStyles,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
} from "@material-ui/core";

import "./CheckoutPage.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

function CheckoutPage() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [card, setCard] = useState("");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getAddress = (addr) => {
    setAddress(addr);
    setActiveStep(activeStep + 1);
  };

  const getCardDetails = (cardDatails) => {
    setCard(cardDatails);
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (step) => {
    if (step === 0) {
      return <AddressForm sendAddress={getAddress} sendName={setName} />;
    } else if (step === 1) {
      return <PaymentForm sendCard={getCardDetails} handleBack={handleBack} />;
    } else if (step === 2) {
      return <Review address={address} card={card} name={name} />;
    } else {
      throw new Error("Unknown step");
    }
  };

  return (
    <div>
      <Container className="layout" maxWidth="sm">
        <Paper elevation={3} className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                {activeStep === steps.length - 1 ? (
                  <div className="myBtn">
                    <Button onClick={handleBack} className="btnStyle">
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className="btnStyle"
                    >
                      Place order
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </div>
  );
}

export default CheckoutPage;
