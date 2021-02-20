import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Form } from "@material-ui/core";
import SignInSide from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
class tox extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={() => <SignInSide />} />
            <Route path="/sign_up" exact component={() => <SignUp />} />
            <Route path="/dashboard" exact component={() => <Dashboard />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Box;
