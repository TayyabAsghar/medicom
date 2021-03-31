import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { savePaymentDetails } from "../../actions/cartActions";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "auto",
    marginRight: theme.spacing(1.6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Payment(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { paymentDetails } = cart;
  const { register, handleSubmit, control } = useForm();
  const { handleBack, handleNext } = props;

  const submitHandler = (data, e) => {
    e.preventDefault();
    dispatch(
      savePaymentDetails({
        cardHolder: data.cardHolder,
        cardNumber: data.cardNumber,
        expDate: data.expDate,
        cvv: data.cvv,
      })
    );
    handleNext();
  };

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Card details
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Controller
              name="cardHolder"
              as={
                <TextField
                  required
                  fullWidth
                  type="name"
                  id="cardHolder"
                  label="Name on card"
                  autoComplete="cc-name"
                  ref={register}
                />
              }
              control={control}
              defaultValue={paymentDetails.cardHolder}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="cardNumber"
              as={
                <TextField
                  required
                  fullWidth
                  id="cardNumber"
                  label="Card number"
                  autoComplete="cc-number"
                />
              }
              control={control}
              defaultValue={paymentDetails.cardNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="expDate"
              as={
                <TextField
                  required
                  fullWidth
                  id="expDate"
                  label="Expiry date"
                  autoComplete="cc-exp"
                />
              }
              control={control}
              defaultValue={paymentDetails.expDate}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="cvv"
              as={
                <TextField
                  required
                  fullWidth
                  id="cvv"
                  label="CVV"
                  autoComplete="cc-csc"
                  helperText="Last three digits on signature strip"
                />
              }
              control={control}
              defaultValue={paymentDetails.cvv}
            />
          </Grid>
          <div className={classes.buttons}>
            <Button
              type="button"
              variant="contained"
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </Grid>
      </form>
    </>
  );
}

export default Payment;
