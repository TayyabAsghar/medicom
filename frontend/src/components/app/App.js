import React from "react";
import Cart from "../views/cart";
import Home from "../views/home";
import MapScreen from "../views/map";
import Order from "../views/order";
import Search from "../views/search";
import SignIn from "../views/signIn";
import SignUp from "../views/signUp";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AdminRoute from "../../views/adminRoute";
import Sellers from "../views/sellers";
import Profile from "../views/profile";
import Payment from "../views/payment";
import SellerRoute from "../../views/sellerRoute";
import Products from "../views/products";
import UserList from "../views/userList";
import EditUser from "../views/editUser";
import OrderList from "../views/orderList";
import PrivateRoute from "../components/privateRoutes";
import PlaceOrder from "../views/placeOrder";
import ProductList from "../views/productList";
import EditProduct from "../views/editProduct";
import OrderHistory from "../views/orderHistory";
import ShippingAddress from "../views/shippingAddress";
import Header from "../components/header";
import Footer from "../components/footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/seller/:id" component={Sellers} />
          <Route path="/cart/:id?" component={Cart} />
          <Route exact path="/product/:id" component={Products} />
          <Route exact path="/product/:id/edit" component={EditProduct} />
          <Route path="/shipping" component={ShippingAddress} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeOrder" component={PlaceOrder} />
          <Route path="/order/:id" component={Order} />
          <Route path="/orderHistory" component={OrderHistory} />
          <Route exact path="/search/name/:name?" component={Search} />
          <Route exact path="/search/category/:category" component={Search} />
          <Route
            exact
            path="/search/category/:category/name/:name"
            component={Search}
          />
          <Route
            exact
            path="/search/category/:category/name/:name/min/:min/max/:max/order/:order/pageNumber/:pageNumber"
            component={Search}
          />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/map" component={MapScreen} />
          <AdminRoute exact path="/productList" component={ProductList} />
          <AdminRoute
            exact
            path="/productList/pageNumber/:pageNumber"
            component={ProductList}
          />
          <AdminRoute exact path="/orderList" component={OrderList} />
          <AdminRoute path="/userList" component={UserList} />
          <AdminRoute path="/user/:id/edit" component={EditUser} />
          <SellerRoute path="/productList/seller" component={ProductList} />
          <SellerRoute path="/orderList/seller" component={OrderList} />
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;
