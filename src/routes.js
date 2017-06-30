import React, { Component } from "react";
import InvestmentAccountsContainer from "./investment-accounts/InvestmentAccountsContainer";
import LoginContainer from "./login/LoginContainer";
import { Redirect, Switch, Route } from 'react-router-dom';

export default class Routes extends Component {
  render() {
    return <div>
      <Route path='/' component={LoginContainer} />
      <Redirect to="/offers"/>
      <Switch>
        <Route path="/offers" /> {/* no component is assigned, as only the path of route is used */}
        <Route path="/my-bids" />
        <Route path="/investment-accounts" />
      </Switch>
    </div>
  }
}
