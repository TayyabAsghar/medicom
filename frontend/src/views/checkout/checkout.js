import React, { useState } from "react";
import { useSelector } from "react-redux";
import Step from "@material-ui/core/Step";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Payment from "./payment";
import Review from "./review";
import ShippingAddress from "./shippingAddress";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
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
    padding: theme.spacing(3, 0, 3),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

function Checkout(props) {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // If Cart is empty redirect it to cart
  if (cartItems.length === 0) {
    props.history.push("/cart");
  }

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  // If User is not SignIn send it SignIn Form
  if (!userInfo) {
    props.history.push("/signIn");
  }

  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep !== 0) setActiveStep(activeStep - 1);
    else props.history.push("/cart"); // first Back Redirect to cart
  };

  const handleFinish = () => {
    props.history.push("/");
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ShippingAddress handleBack={handleBack} handleNext={handleNext} />
        );
      case 1:
        return <Payment handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return (
          <Review
            handleBack={handleBack}
            handleNext={handleNext}
            handleFinish={handleFinish}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is {orders._id}. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
                <br />
                <Typography variant="subtitle1">
                  You can check your order and it's status in Order History
                  anytime.
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleFinish}
                    className={classes.button}
                  >
                    Finish
                  </Button>
                </div>
              </>
            ) : (
              <>{getStepContent(activeStep)}</>
            )}
          </>
        </Paper>
      </main>
    </>
  );
}

export default Checkout;
