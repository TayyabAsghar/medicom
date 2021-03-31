import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signUp } from "../../actions/userActions";
import MessageBox from "../../components/messageBox";
import { useForm, Controller } from "react-hook-form";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/46361763)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  box: {
    backgroundColor: "white",
    borderRadius: "16px",
    opacity: "0.75",
    "&:hover": { opacity: "0.87" },
  },
  paper: {
    margin: theme.spacing(2, 4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  close: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.grey[500],
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const closeHandler = () => {
    props.history.push("/");
  };

  const submitHandler = (data, e) => {
    e.preventDefault();
    // dispatch(
    //   signUp(
    //     data.firstName.trim() + " " + data.lastName.trim(),
    //     data.email,
    //     data.password
    //   )
    // );
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <Grid container component="main" className={classes.image}>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.box}>
        {/* Close Icon Avatar to go back to Home */}
        <IconButton className={classes.close} onClick={closeHandler}>
          <CloseIcon />
        </IconButton>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {/* Form for SignUp*/}
          <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
            {/* User Name Grid*/}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="firstName"
                  as={
                    <TextField
                      required
                      fullWidth
                      autoFocus
                      type="name"
                      id="firstName"
                      label="First Name"
                      variant="outlined"
                      autoComplete="given-name"
                      ref={register}
                    />
                  }
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  as={
                    <TextField
                      required
                      fullWidth
                      type="name"
                      id="lastName"
                      label="Last Name"
                      variant="outlined"
                      autoComplete="family-name"
                      ref={register}
                    />
                  }
                  control={control}
                  defaultValue=""
                />
              </Grid>
            </Grid>
            <Controller
              name="email"
              as={
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  label="Email Address"
                  autoComplete="email"
                  ref={register}
                />
              }
              control={control}
              defaultValue=""
            />
            <Controller
              name="password"
              as={
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="password"
                  margin="normal"
                  label="Password"
                  variant="outlined"
                  ref={register}
                />
              }
              control={control}
              defaultValue=""
            />

            {/* {passwordError && (
              <MessageBox variant="danger">{passwordError}</MessageBox>
            )} */}
            <Controller
              name="confirmPassword"
              as={
                <TextField
                  required
                  fullWidth
                  type="text"
                  margin="normal"
                  variant="outlined"
                  id="confirmPassword"
                  label="Confirm Password"
                  autoComplete="current-password"
                  ref={register}
                />
              }
              control={control}
              defaultValue=""
            />

            {/* Showing Error Message about Pass / Email*/}
            {/* {confirmationError && (
              <MessageBox variant="danger">{confirmationError}</MessageBox>
            )} */}

            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>

            {/* SignIn */}
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={`/signIn?redirect=${redirect}`} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Grid>
  );
}

export default SignUp;
