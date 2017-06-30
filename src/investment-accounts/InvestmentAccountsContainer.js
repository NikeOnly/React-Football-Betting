import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import injectProps from "../_utils/decorators/injectProps";
import InvestmentAccountsPage from "./InvestmentAccountsPage";
import {loadAccountVerificationAdresses} from "../reducers-and-actions/offerInfoActions";

const mapStateToProps = (store) => {
  return {
    userInfo: store.userInfoReducer,
    ...store.offerInfoReducer
  };
};

const mapActionsToDispatcher = {
  loadAccountVerificationAdresses
};

@connect(mapStateToProps, mapActionsToDispatcher)
class InvestmentAccountsContainer extends Component {

  @injectProps
  render({userInfo, login, ...restProps}) {
    return <InvestmentAccountsPage userInfo={userInfo} login={login} {...restProps} />
  }
}

export default InvestmentAccountsContainer;
