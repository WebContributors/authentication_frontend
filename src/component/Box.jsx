import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Form } from "@material-ui/core";
import SignInSide from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class Box extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={() => <SignInSide />} />
            <Route path="/sign_up" exact component={() => <SignUp />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Box;
