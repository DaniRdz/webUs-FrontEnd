import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./home";
import SingIn from "./login-page/sign-in";
import Register from "./register-page/register";
import AboutUs from "./about-us-page/about-us";
import Menu from "./menu-page/menu";
import Review from "./review-page/review";
import ShippingInfo from "./shipping-page/shipping-info";
import Payment from "./payment-page/payment";
import NavigationContainer from "./navigation-container";
import Footer from "./footer";

import history from "../history";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationContainer />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-in" component={SingIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/acerca-de-nosotros" component={AboutUs} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/checkout/order/resumen" component={Review} />
            <Route
              exact
              path="/information/shipping"
              component={ShippingInfo}
            />
            <Route exact path="/information/payment" component={Payment} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
