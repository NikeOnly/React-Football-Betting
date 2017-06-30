import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import injectProps from "../_utils/decorators/injectProps";
import * as AuthStatusEnum from "../_enums/AuthStatus";
import {login, signup, googleAuth, facebookAuth, logout} from "../reducers-and-actions/userInfoActions";

import LoginPage from "./LoginPage";
import NavigationPanel from "./../_components/NavigationPanel";

const mapStateToProps = (store) => {
    return {userInfo: store.userInfoReducer};
};

const mapActionsToDispatcher = {
    login,
    signup,
    googleAuth,
    facebookAuth,
    logout
};

@connect(mapStateToProps, mapActionsToDispatcher)
class LoginContainer extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    @injectProps
    render({userInfo, login, signup, googleAuth, facebookAuth, logout}) {
        const content = userInfo.authStatus == AuthStatusEnum.AUTHORIZED
            ? <NavigationPanel userInfo={userInfo} userLogout={logout} pathname={this.props.location.pathname} />
            : <LoginPage userLogin={login} userSignupWithGoogle={googleAuth} userSignupWithFacebook={facebookAuth} userSignup={signup} />;

        return <div>
            {content}
        </div>
    }
}

export default LoginContainer;
