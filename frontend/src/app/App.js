import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Importing Views/Pages
import Cart from "../views/cart/cart";
import Home from "../views/home/home";
import Order from "../views/orders/order";
import SignIn from "../views/home/signIn";
import SignUp from "../views/home/signUp";
import Search from "../views/search/search";
import Sellers from "../views/users/sellers";
import Profile from "../views/users/profile";
import MapScreen from "../views/checkout/map";
import UserList from "../views/users/userList";
import EditUser from "../views/users/editUser";
import Products from "../views/products/products";
import OrderList from "../views/orders/orderList";
import ProductList from "../views/products/productList";
import EditProduct from "../views/products/editProduct";
import OrderHistory from "../views/orders/orderHistory";
import Checkout from "../views/checkout/checkout";

// Importing Routes
import SellerRoute from "../routes/sellerRoute";
import AdminRoute from "../routes/adminRoute";
import PrivateRoute from "../routes/privateRoutes";

// Importing Components
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
          <Route path="/checkout" component={Checkout} />
          <Route path="/order/:id" component={Order} />
          <Route path="/orderHistory" component={OrderHistory} />

          {/* Searching Routes */}
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

          {/* Private Routes */}
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/map" component={MapScreen} />

          {/* Admin Routes */}
          <AdminRoute exact path="/productList" component={ProductList} />
          <AdminRoute
            exact
            path="/productList/pageNumber/:pageNumber"
            component={ProductList}
          />
          <AdminRoute exact path="/orderList" component={OrderList} />
          <AdminRoute path="/userList" component={UserList} />
          <AdminRoute path="/user/:id/edit" component={EditUser} />

          {/* Seller Routes */}
          <SellerRoute path="/productList/seller" component={ProductList} />
          <SellerRoute path="/orderList/seller" component={OrderList} />
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;
