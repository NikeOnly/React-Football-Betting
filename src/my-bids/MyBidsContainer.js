import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import injectProps from "../_utils/decorators/injectProps";

import MyBidsPage from "./MyBidsPage";

const mapStateToProps = (store) => {
    return {userInfo: store.userInfoReducer};
};

const mapActionsToDispatcher = {
};

@connect(mapStateToProps, mapActionsToDispatcher)
class MyBidsContainer extends Component {

  @injectProps
  render({userInfo, login}) {
    return <MyBidsPage userInfo={userInfo} login={login} />
  }
}

export default MyBidsContainer;
