import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signIn } from "../../actions/userActions";
import MessageBox from "../../components/messageBox";

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
  root: {
    height: "100vh",
  },
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
  paper: {
    margin: theme.spacing(0, 4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  close: {
    width: theme.spacing(7),
    height: theme.spacing(7),
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
    margin: theme.spacing(2, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm();
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo, error } = userSignin;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const closeHandler = () => {
    props.history.push("/");
  };

  const submitHandler = (data, e) => {
    e.preventDefault();
    dispatch(signIn(data.email, data.password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {/* Close Icon Avatar to go back to Home */}
        <IconButton className={classes.close} onClick={closeHandler}>
          <CloseIcon />
        </IconButton>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* Form for SignIn*/}
          <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
            <Controller
              name="email"
              as={
                <TextField
                  required
                  fullWidth
                  autoFocus
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
                  id="password"
                  margin="normal"
                  type="password"
                  label="Password"
                  variant="outlined"
                  autoComplete="current-password"
                  ref={register}
                />
              }
              control={control}
              defaultValue=""
            />

            {/* Showing Error Message about wrong Pass or email*/}
            {error && <MessageBox type="danger">{error}</MessageBox>}

            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>

            {/* Forget Password / SignUp */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={`/SignUp?redirect=${redirect}`}>
                  Don't have one? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignIn;
