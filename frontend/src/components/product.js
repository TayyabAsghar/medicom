import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 170,
    width: 170,
    borderRadius: "10px",
    marginLeft: "30px",
  },
  image: {
    height: 100,
    maxWidth: 100,
    margin: "auto",
  },
  text: {
    height: "auto",
    minHeight: 150,
    width: 170,
    padding: theme.spacing(2),
    marginLeft: "30px",
    marginBottom: "20px",
  },
  name: {
    color: "#273142",
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "Inter",
  },
  price: {
    color: "#2196F3",
    fontSize: "15px",
    fontWeight: "400",
    padding: "2px",
    fontFamily: "Inter",
  },
}));

function Product(props) {
  const { product, color } = props;
  const classes = useStyles();

  return (
    <div key={product._id}>
      <Link to={`/product/${product._id}`}>
        <div
          className={classes.imageContainer}
          style={{
            backgroundColor: color,
          }}
        >
          <img
            className={classes.image}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className={classes.text}>
          <Typography className={classes.name}>{product.name}</Typography>
          <Typography className={classes.price}>
            Starting at ${product.price}
          </Typography>
        </div>
      </Link>
    </div>
  );
}

export default Product;
