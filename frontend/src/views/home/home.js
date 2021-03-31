// import React, { useEffect } from "react";
// import Product from "../../components/product";
// import { useDispatch, useSelector } from "react-redux";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import LoadingBox from "../../components/loadingBox";
// import MessageBox from "../../components/messageBox";
// import { listProducts } from "../../actions/productActions";

// function Home() {
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;

//   useEffect(() => {
//     dispatch(listProducts({}));
//   }, [dispatch]);
//   return (
//     <div>
//       <h2>Featured Products</h2>
//       {loading ? (
//         <LoadingBox></LoadingBox>
//       ) : error ? (
//         <MessageBox variant="danger">{error}</MessageBox>
//       ) : (
//         <>
//           {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
//           <div className="row center">
//             {products.map((product) => (
//               <Product key={product._id} product={product}></Product>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Home;

import Product from "../../components/product";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoadingBox from "../../components/loadingBox";
import MessageBox from "../../components/messageBox";
import { listProducts } from "../../actions/productActions";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: 270,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    color: "#273142",
    fontSize: "15px",
    fontWeight: "400",
  },
  product: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <main style={{ backgroundColor: "white" }}>
          <CssBaseline />
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                align="center"
                color="textPrimary"
                gutterBottom
                style={{ fontSize: "30px" }}
              >
                Medicom
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                This is an online store for the quality medicines at lowest
                price. With just simple clicks medicine will be delivered on
                your doorsteps.
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className={classes.product}>
                {products.map((product) => (
                  <Product
                    key={product._id}
                    product={product}
                    color={
                      parseInt(product._id[product._id.length - 1]) % 2
                        ? "#F1F9FE"
                        : "#FFF8F6"
                    }
                  />
                ))}
              </div>
            </Grid>
          </Container>
        </main>
      )}
    </React.Fragment>
  );
}
export default Home;
