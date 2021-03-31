import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import LoadingBox from "../../components/loadingBox";
import MessageBox from "../../components/messageBox";
import { createOrder } from "../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../../constants/orderConstants";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  price: {
    fontWeight: 500,
    marginRight: theme.spacing(1.6),
  },
  total: {
    fontWeight: 700,
    marginRight: theme.spacing(1.6),
  },
  divider: {
    height: "2px",
    marginRight: theme.spacing(1.6),
  },
  title: {
    marginTop: theme.spacing(2),
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

export default function Review(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleBack, handleNext } = props;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentDetails } = cart;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const address = [
    shippingAddress.address,
    shippingAddress.city,
    shippingAddress.state,
    shippingAddress.postalCode,
    shippingAddress.country,
  ];

  const payments = [
    { name: "Card Holder", detail: paymentDetails.cardHolder },
    { name: "Card Number", detail: paymentDetails.cardNumber },
    { name: "CVV", detail: paymentDetails.cvv },
    { name: "Expiry Date", detail: paymentDetails.expDate },
  ];

  const placeOrder = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    //console.log(order); // REVIEW for Testing
    handleNext();
  };

  useEffect(() => {
    if (success) {
      //props.history.push(`/order/${order._id}`);  // REVIEW for testing
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {/* Mapping All the product Details */}

        {cart.cartItems.map((item) => (
          <ListItem className={classes.listItem} key={item.product}>
            <ListItemText primary={item.name} secondary={item.desc} />

            <Typography variant="body2" className={classes.price}>
              {item.qty} x ${item.price} = ${item.qty * item.price}
            </Typography>
          </ListItem>
        ))}
        <Divider className={classes.divider} />
        {/* Shipping Price */}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" className={classes.price}>
            ${cart.shippingPrice}
          </Typography>
        </ListItem>
        {/* Tax Price */}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Tax" />
          <Typography variant="subtitle1" className={classes.price}>
            ${cart.taxPrice}
          </Typography>
        </ListItem>
        <Divider className={classes.divider} />
        {/* Total Price */}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${cart.totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* Shipping Address */}

          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping Address
          </Typography>
          <Typography gutterBottom>{shippingAddress.name}</Typography>
          <Typography gutterBottom>{address.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          {/* Card Details */}

          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {/* Mapping the Card Details */}

            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>

        <div className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={placeOrder}
            className={classes.button}
          >
            Place Order
          </Button>
        </div>
      </Grid>
    </>
  );
}

// import { Link } from "react-router-dom";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import LoadingBox from "../../components/loadingBox";
// import MessageBox from "../../components/messageBox";
// import { createOrder } from "../../actions/orderActions";
// import { ORDER_CREATE_RESET } from "../../constants/orderConstants";

// function PlaceOrder(props) {
//   const cart = useSelector((state) => state.cart);
//   if (!cart.paymentMethod) {
//     props.history.push("/payment");
//   }
//   const orderCreate = useSelector((state) => state.orderCreate);
//   const { loading, success, error, order } = orderCreate;
//   const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
//   cart.itemsPrice = toPrice(
//     cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
//   );
//   cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
//   cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
//   cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
//   const dispatch = useDispatch();
//   const placeOrderHandler = () => {
//     dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
//   };
//   useEffect(() => {
//     if (success) {
//       props.history.push(`/order/${order._id}`);
//       dispatch({ type: ORDER_CREATE_RESET });
//     }
//   }, [dispatch, order, props.history, success]);
//   return (
//     <div>
//       <div className="row top">
//         <div className="col-2">
//           <ul>
//             <li>
//               <div className="card card-body">
//                 <h2>Shipping</h2>
//                 <p>
//                   <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
//                   <strong>Address: </strong> {cart.shippingAddress.address},
//                   {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
//                   ,{cart.shippingAddress.country}
//                 </p>
//               </div>
//             </li>
//             <li>
//               <div className="card card-body">
//                 <h2>Payment</h2>
//                 <p>
//                   <strong>Method:</strong> {cart.paymentMethod}
//                 </p>
//               </div>
//             </li>
//             <li>
//               <div className="card card-body">
//                 <h2>Order Items</h2>
//                 <ul>
//                   {cart.cartItems.map((item) => (
//                     <li key={item.product}>
//                       <div className="row">
//                         <div>
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="small"
//                           ></img>
//                         </div>
//                         <div className="min-30">
//                           <Link to={`/product/${item.product}`}>
//                             {item.name}
//                           </Link>
//                         </div>

//                         <div>
//                           {item.qty} x ${item.price} = ${item.qty * item.price}
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className="col-1">
//           <div className="card card-body">
//             <ul>
//               <li>
//                 <h2>Order Summary</h2>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>Items</div>
//                   <div>${cart.itemsPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>Shipping</div>
//                   <div>${cart.shippingPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>Tax</div>
//                   <div>${cart.taxPrice.toFixed(2)}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>
//                     <strong> Order Total</strong>
//                   </div>
//                   <div>
//                     <strong>${cart.totalPrice.toFixed(2)}</strong>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   onClick={placeOrderHandler}
//                   className="primary block"
//                   disabled={cart.cartItems.length === 0}
//                 >
//                   Place Order
//                 </button>
//               </li>
//               {loading && <LoadingBox></LoadingBox>}
//               {error && <MessageBox variant="danger">{error}</MessageBox>}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlaceOrder;
