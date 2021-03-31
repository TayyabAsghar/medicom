import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Favorite from "@material-ui/icons/Favorite";
import LocationOn from "@material-ui/icons/LocationOn";
import Done from "@material-ui/icons/DoneAllOutlined";
import LocalPharmacy from "@material-ui/icons/LocalPharmacy";
import Cart from "@material-ui/icons/ShoppingCart";
import Assessment from "@material-ui/icons/Assessment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoadingBox from "../../components/loadingBox";
import MessageBox from "../../components/messageBox";
import { detailsProduct } from "../../actions/productActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "white",
  },
  heading: {
    width: "100%",
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(14),
  },
  details: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
  },
  imageGrid: {
    height: "100vh",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: "15px",
    backgroundColor: "#e0f7fa",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(14),
    marginRight: theme.spacing(2),
  },
  image: {
    height: 120,
    maxWidth: 120,
    margin: "auto",
    backgroundPosition: "center",
  },
  logo: {
    flexDirection: "column",
    alignItems: "left",
  },
  item: {
    padding: 0,
    margin: 0,
  },
  avatar: {
    backgroundColor: "rgba(201,203,208,0.2)",
    width: "45px",
    height: "45px",
  },
  contains: {
    fontSize: "13px",
    fontFamily: "Inter",
  },
  gridContains: {
    marginTop: "14px",
  },
  divider: {
    backgroundColor: "#00BABA",
  },
  addToCart: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  boxText: {
    marginTop: "10px",
    marginLeft: "16px",
    fontSize: "12px",
    fontFamily: "Inter",
    color: "#5D6471",
  },
  boxButton: {
    textTransform: "none",
    marginTop: "5px",
    marginLeft: "16px",
    backgroundColor: "#D5E5F6",
  },
  submit: {
    marginTop: "24px",
    marginLeft: "9px",
    marginBottom: "16px",
    padding: "10px",
    width: "95%",
  },
}));

function Products(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}`);
  };
  const testContains = true;

  return (
    <div className={classes.root}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Grid container>
          <CssBaseline />
          <Grid className={classes.heading}>
            <Grid style={{ display: "inline-flex" }}>
              <Link color="inherit" to="/">
                <Typography style={{ fontSize: "14px" }}>Home </Typography>
              </Link>
              <Typography style={{ fontSize: "14px", marginLeft: "4px" }}>
                {" > "}
                {product.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs style={{ display: "inline-flex" }}>
            <div className={classes.imageGrid}>
              <div className={classes.imageContainer}>
                <img
                  className={classes.image}
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
            <Grid item xs className={classes.details}>
              <Grid>
                <Typography style={{ fontSize: "25px" }}>
                  {product.name}
                </Typography>
                <Grid
                  container
                  justify="space-between"
                  style={{ display: "inline-flex" }}
                >
                  <Grid item>
                    <Typography style={{ color: "#6E7580", fontSize: "20px" }}>
                      {product.manufacturer.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img
                      className={classes.logo}
                      src={product.manufacturer.logo}
                      alt={product.manufacturer.name}
                    />
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Typography
                  style={{
                    fontSize: "14px",
                    margin: "10px",
                    marginBottom: "20px",
                    color: "#6E7580",
                  }}
                >
                  {product.brief}
                </Typography>
                <Divider className={classes.divider} />

                {/* List of details */}
                <List>
                  <div>
                    <Grid style={{ display: "inline-flex" }}>
                      {/* Manufacturer Name */}
                      <ListItem className={classes.item}>
                        <ListItemIcon>
                          <Avatar className={classes.avatar}>
                            <LocalPharmacy
                              fontSize="small"
                              style={{ color: "#5898DD" }}
                            />
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={product.manufacturer.name}
                          secondary="Manufacturer"
                        />
                      </ListItem>

                      {/* Manufacturer Base */}
                      <ListItem
                        className={classes.item}
                        style={{ marginLeft: "50px" }}
                      >
                        <ListItemIcon>
                          <Avatar className={classes.avatar}>
                            <LocationOn
                              fontSize="small"
                              style={{ color: "#00B7A6" }}
                            />
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={product.manufacturer.base}
                          secondary="Based in"
                        />
                      </ListItem>
                    </Grid>
                  </div>

                  <div>
                    <Grid style={{ display: "inline-flex" }}>
                      {/* Health Conditions */}
                      <ListItem className={classes.item}>
                        <ListItemIcon>
                          <Avatar className={classes.avatar}>
                            <Favorite
                              fontSize="small"
                              style={{ color: "#FF715A" }}
                            />
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={product.healthCondition}
                          secondary="Health Condition"
                        />
                      </ListItem>

                      {/* Similar Drugs */}
                      <ListItem
                        className={classes.item}
                        style={{ marginLeft: "50px" }}
                      >
                        <ListItemIcon>
                          <Avatar className={classes.avatar}>
                            <Assessment
                              fontSize="small"
                              style={{ color: "#FFA801" }}
                            />
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary="0" //{product.similar}
                          secondary="Similar Drugs"
                        />
                      </ListItem>
                    </Grid>
                  </div>
                </List>
                <Divider className={classes.divider} />

                {/* Contains List */}
                <Grid className={classes.gridContains}>
                  <Grid style={{ display: "inline-flex" }}>
                    <Done
                      fontSize="small"
                      style={{
                        color: !testContains ? "#00B7A6" : "#9398A0",
                        marginRight: "8px",
                      }}
                    />
                    <Typography
                      className={classes.contains}
                      style={{ color: !testContains ? "#273142" : "#9398A0" }}
                    >
                      Contains Gluten
                    </Typography>
                    <Done
                      fontSize="small"
                      style={{
                        color: testContains ? "#00B7A6" : "#9398A0",
                        marginRight: "8px",
                        marginLeft: "45px",
                      }}
                    />
                    <Typography
                      className={classes.contains}
                      style={{ color: testContains ? "#273142" : "#9398A0" }}
                    >
                      Contains Sweeteners
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className={classes.gridContains}>
                  <Grid style={{ display: "inline-flex" }}>
                    <Done
                      fontSize="small"
                      style={{
                        color: testContains ? "#00B7A6" : "#9398A0",
                        marginRight: "8px",
                      }}
                    />
                    <Typography
                      className={classes.contains}
                      style={{ color: testContains ? "#273142" : "#9398A0" }}
                    >
                      Contains Gelatin
                    </Typography>
                    <Done
                      fontSize="small"
                      style={{
                        color: !testContains ? "#00B7A6" : "#9398A0",
                        marginRight: "8px",
                        marginLeft: "45px",
                      }}
                    />
                    <Typography
                      className={classes.contains}
                      style={{ color: !testContains ? "#273142" : "#9398A0" }}
                    >
                      Contains Soy
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className={classes.gridContains}>
                  <Grid style={{ display: "inline-flex" }}>
                    <Done
                      fontSize="small"
                      style={{
                        color: testContains ? "#00B7A6" : "#9398A0",
                        marginRight: "8px",
                      }}
                    />
                    <Typography className={classes.contains}>
                      Contains Lactose
                    </Typography>
                    <Done
                      fontSize="small"
                      style={{
                        color: testContains ? "#00B7A6" : "#9398A0",
                        marginRight: "8px",
                        marginLeft: "42px",
                      }}
                    />
                    <Typography className={classes.contains}>
                      Contains Dye
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Add to Cart */}
            <Grid item xs className={classes.addToCart}>
              <Box boxShadow={3} width={350} height={500}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Grid item xs>
                    <Typography
                      style={{
                        marginTop: "20px",
                        marginLeft: "30px",
                        fontSize: "14px",
                        fontFamily: "Inter",
                      }}
                    >
                      {product.form} ~ {product.strength} mg ~ 30ct
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography
                      style={{
                        marginTop: "10px",
                        marginLeft: "20px",
                        fontSize: "30px",
                        fontFamily: "Inter",
                      }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={classes.boxText}>FORM</Typography>
                <Button variant="outlined" className={classes.boxButton}>
                  {product.form}
                </Button>
                <Typography className={classes.boxText}>STRENGTH</Typography>
                <Button variant="outlined" className={classes.boxButton}>
                  {product.strength} mg
                </Button>
                <Typography className={classes.boxText}>
                  PACKAGE SIZE
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.boxButton}
                  style={{
                    minWidth: "70px",
                  }}
                >
                  30
                </Button>
                <Typography className={classes.boxText}>
                  PACKAGES IN STOCK
                </Typography>
                <Button
                  variant="outlined"
                  style={{
                    textTransform: "none",
                    marginTop: "5px",
                    marginLeft: "16px",
                    marginBottom: "6px",
                    backgroundColor:
                      product.countInStock > 0 ? "#D5E5F6" : "#D5E5F6",
                    minWidth: "70px",
                  }}
                >
                  {product.countInStock}
                </Button>
                <Grid>
                  <Button
                    onClick={addToCartHandler}
                    variant="contained"
                    className={classes.submit}
                    style={{
                      textTransform: "none",
                      backgroundColor: "#5898DD",
                      color: "white",
                      fontSize: "16px",
                      fontFamily: "Inter",
                    }}
                    endIcon={<Cart style={{ color: "white" }} />}
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Typography
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    marginLeft: "14px",
                  }}
                >
                  Don't see your manufacturer or quantity?
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Inter",
                    fontSize: "12px",
                    marginLeft: "14px",
                    color: "#629EDF",
                  }}
                >
                  Contact Support
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Products;
