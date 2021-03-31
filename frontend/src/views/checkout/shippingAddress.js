import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "auto",
    marginRight: theme.spacing(1.8),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function ShippingAddress(props) {
  const classes = useStyles();
  const { handleBack, handleNext } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;
  const { register, handleSubmit, control } = useForm();

  const submitHandler = (data, e) => {
    e.preventDefault();
    const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLat(addressMap.lat);
      setLng(addressMap.lng);
    }
    // let moveOn = true;
    // if (!newLat || !newLng) {
    //   moveOn = window.confirm(
    //     "You did not set your location on map. Continue?"
    //   );
    // }
    // if (moveOn)
    // {
    dispatch(
      saveShippingAddress({
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
        lat: newLat,
        lng: newLng,
      })
    );
    // }

    // Handle the next step in Stepper
    handleNext();
  };

  const chooseOnMap = () => {
    // dispatch(
    //   saveShippingAddress({
    //     name,
    //     address,
    //     city,
    //     postalCode,
    //     country,
    //     lat,
    //     lng,
    //   })
    // );
    props.history.push("/map");
  };

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Shipping address
      </Typography>

      {/* Shipping Address Form */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              as={
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoComplete="name"
                  ref={register}
                />
              }
              control={control}
              defaultValue={shippingAddress.name}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="address"
              as={
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  autoComplete="shipping address-line1"
                  ref={register}
                />
              }
              control={control}
              defaultValue={shippingAddress.address}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="city"
              as={
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoComplete="shipping address-level2"
                  ref={register}
                />
              }
              control={control}
              defaultValue={shippingAddress.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="state"
              as={
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State/Province/Region"
                  ref={register}
                />
              }
              control={control}
              defaultValue={shippingAddress.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="postalCode"
              as={
                <TextField
                  required
                  fullWidth
                  id="postalCode"
                  label="Zip / Postal code"
                  autoComplete="shipping postal-code"
                  ref={register}
                />
              }
              control={control}
              defaultValue={shippingAddress.postalCode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="country"
              as={
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  autoComplete="shipping country"
                  ref={register}
                />
              }
              control={control}
              defaultValue={shippingAddress.country}
            />
          </Grid>
          <div className={classes.buttons}>
            <Button
              type="button"
              variant="contained"
              onClick={handleBack}
              className={classes.button}
            >
              Cart
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

export default ShippingAddress;
