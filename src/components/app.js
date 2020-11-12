import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./home";
import SingIn from "./login-page/sign-in";
import Register from "./register-page/register";
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
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
