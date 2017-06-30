import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../_utils/decorators/injectProps";
import ValidationUtils from "../_utils/ValidationUtils";
import VanillaUtils from "../_utils/VanillaUtils";
import Dialog from "react-md/lib/Dialogs";
import Button from "react-md/lib/Buttons/Button";
import Tabs from "react-md/lib/Tabs/Tabs";
import Tab from "react-md/lib/Tabs/Tab";
import TabsContainer from "react-md/lib/Tabs/TabsContainer";
import Paper from 'react-md/lib/Papers';

import LoginForm from "./../_components/login/LoginForm";
import SignupForm from "./../_components/login/SignupForm";
import ForgetPasswordTab from "./../_components/login/ForgetPasswordTab";
import ForgetPasswordCodeTab from "./../_components/login/ForgetPasswordCodeTab";
import SuccessSignUpTab from "./../_components/login/SuccessSignUpTab";

import ProgressBlockingParentWindow from "./../_components/ProgressBlockingParentWindow";

const ACTIVE_TAB = {
    LOG_IN: 0,
    SING_UP: 1
};

class TaskListPage extends Component {
    static propTypes = {

        email: PropTypes.string,
        emailValidationError: PropTypes.string,

        password: PropTypes.string,
        passwordValidationError: PropTypes.string,

        facebookBtnLabel: PropTypes.string,
        googleBtnLabel: PropTypes.string,

        onEmailChanged: PropTypes.func,
        onPasswordChanged: PropTypes.func,

        onFacebookClick: PropTypes.func,
        onGoogleClick: PropTypes.func,

        // Redux Actions
        userLogin: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = this.getDefaultState();
    }

    getDefaultState() {
        return {
            isDialogVisible: false,
            activeDialogTab: ACTIVE_TAB.LOG_IN,
            rememberMe: false,
            userEmail: 'test@gmail.com',
            userEmailValidationError: null,
            userPassword: 'Test12',
            userPasswordValidationError: null,
            showTab: false,
            showProgressLoader: false,

            sentForgetPasswordEmail: false,
            userCode: "",
            userCodeValidationError: null,
            successSignUp: false,

            authErrorLogin: {display: 'none'},
            authErrorSignup: {display: 'none'}
        }
    }

    showPopup() {
        this.setState({...this.getDefaultState(), isDialogVisible: true});
    }

    closePopup() {
        this.setState({isDialogVisible: false});
    };

    handleTabChange(activeIndex) {
        this.setState({activeDialogTab: activeIndex})
    }

    onForgetPasswordClicked() {
        this.setState({showTab: true});
    }

    onForgetPasswordBackClicked() {
        this.setState({showTab: false});
    }

    onEmailChanged(userEmail) {
        this.setState({userEmail, userEmailValidationError: null});
    }

    onPasswordChanged(userPassword) {
        this.setState({userPassword, userPasswordValidationError: null});
    }

    onCodeChanged(userCode) {
        this.setState({userCode, codeValidationError: null});
    }

    onRememberMeChecked(checked) {
        this.setState({rememberMe: checked})
    }

    onLoginClicked(email, password, rememberMe) {
        if (this.validateUserCredentialsForm(email, password)) {

            this.setState({ showProgressLoader: true, authErrorLogin: {display: 'none'}, authErrorSignup: {display: 'none'} });


            setTimeout(() => {
                this.setState({showProgressLoader: false});

                this.props.userLogin(email, password, rememberMe).then(({payload:httpResponse}) => {

                  if(httpResponse.message !== undefined) {
                    this.onLoginError();
                  }

                });

            }, 1000);
        }
    }

    onSignUpClicked(email, password) {
        if (this.validateUserCredentialsForm(email, password)) {

            this.setState({ showProgressLoader: true, authErrorLogin: {display: 'none'}, authErrorSignup: {display: 'none'} });

            setTimeout(() => {
              this.setState({showProgressLoader: false});

              this.props.userSignup(email, password).then(({payload:httpResponse}) => {

                if(httpResponse.message !== undefined) {
                  this.onSignupError();
                } else {
                  this.setState({successSignUp: true});
                }

              });

            }, 1000);
        }
    }

    onResetPasswordClicked(email) {
        const userEmailValidationError = ValidationUtils.getEmailValidationError(email);

        this.setState({userEmailValidationError});

        if (!userEmailValidationError) {
            this.setState({showProgressLoader: true});

            setTimeout(() => this.setState({showProgressLoader: false, sentForgetPasswordEmail: true}), 3000);
        }
    }

    onApplyCodeClicked(code) {
      this.setState({showProgressLoader: true});

      setTimeout(() => this.setState({showProgressLoader: false, showTab: false}), 3000);
    }

    onLoginError() {
      this.setState({ authErrorLogin: {display: 'block'} });
    }

    onSignupError() {
      this.setState({ authErrorSignup: {display: 'block'} });
    }

    onSwitchToLogin() {
      this.setState({ activeDialogTab: ACTIVE_TAB.LOG_IN });
    }

    responseGoogle(response) {
      if(!response.error) {
        this.props.userSignupWithGoogle(response);
      }
    }

    responseFacebook(response) {
      if(!response.status) {
        this.props.userSignupWithFacebook(response);
      }
    }

    renderAuthenticationTabs(rememberMe, userEmail, userEmailValidationError, userPassword,
      userPasswordValidationError, userLogin) {

        const showSignUpTabContent = this.state.successSignUp ?
        <SuccessSignUpTab onSwitchToLogin={::this.onSwitchToLogin} /> :
        <SignupForm
          userEmail={userEmail}
          userEmailValidationError={userEmailValidationError}
          onEmailChanged={::this.onEmailChanged}
          userPassword={userPassword}
          userPasswordValidationError={userPasswordValidationError}
          onPasswordChanged={::this.onPasswordChanged}
          onSignUpClicked={() => this.onSignUpClicked(userEmail, userPassword)}
          onResponseGoogle={::this.responseGoogle}
          onResponseFacebook={::this.responseFacebook}
        />;

        return [
            <Tab label="Log In" key="log-in-tab">
              <div className="login-error__wrapper">
                <Paper
                  className="login-error__content"
                  style={this.state.authErrorLogin}
                >
                  Wrong user email or password.
                </Paper>
              </div>

              <LoginForm
                userEmail={userEmail}
                userEmailValidationError={userEmailValidationError}
                onEmailChanged={::this.onEmailChanged}
                userPassword={userPassword}
                userPasswordValidationError={userPasswordValidationError}
                onPasswordChanged={::this.onPasswordChanged}
                rememberMe={rememberMe}
                onRememberMeChecked={::this.onRememberMeChecked}
                onForgetPasswordClicked={::this.onForgetPasswordClicked}
                onLoginClicked={() => this.onLoginClicked(userEmail, userPassword, rememberMe)}
                onResponseGoogle={::this.responseGoogle}
                onResponseFacebook={::this.responseFacebook}
              />
            </Tab>,
            <Tab label="Sign Up" key="sign-up-tab">
              <div className="login-error__wrapper">
                <Paper
                  className="login-error__content"
                  style={this.state.authErrorSignup}
                >
                  User with this email is already exists.
                </Paper>
              </div>

              {showSignUpTabContent}
            </Tab>
        ]
    }

    renderForgetPasswordTab(userEmail, emailValidationError, userCode, userCodeValidationError) {

        const showForgetPasswordTabContent = this.state.sentForgetPasswordEmail ?
        <ForgetPasswordCodeTab
          code={userCode}
          codeValidationError={userCodeValidationError}
          onCodeChanged={::this.onCodeChanged}
          onForgetPasswordBackClicked={::this.onForgetPasswordBackClicked}
          onApplyCodeClicked={() => this.onApplyCodeClicked(userCode)}
        /> :
        <ForgetPasswordTab
          userEmail={userEmail}
          emailValidationError={emailValidationError}
          onEmailChanged={::this.onEmailChanged}
          onForgetPasswordBackClicked={::this.onForgetPasswordBackClicked}
          onResetPasswordClicked={() => this.onResetPasswordClicked(userEmail)}
        />;

        return <Tab label="Reset your password" active className="reset-password-tab-header">
          {showForgetPasswordTabContent}
        </Tab>
    }

// TODO make pure function?
    validateUserCredentialsForm(email, password) {
        const userEmailValidationError = ValidationUtils.getEmailValidationError(email);
        const userPasswordValidationError = ValidationUtils.getPasswordValidationError(password);

        this.setState({userEmailValidationError, userPasswordValidationError});

        return !userEmailValidationError && !userPasswordValidationError;
    }

    @injectProps
    render({userLogin}) {

        const {
            isDialogVisible, activeDialogTab, rememberMe, userEmail, userEmailValidationError, userPassword, userPasswordValidationError,
            showTab, showProgressLoader, userCode, userCodeValidationError
        } = this.state;

        const inProgressBlockingWindow = showProgressLoader ? <ProgressBlockingParentWindow /> : null;

        const tabsContent = showTab
            ? this.renderForgetPasswordTab(userEmail, userEmailValidationError, userCode, userCodeValidationError)
            : this.renderAuthenticationTabs(rememberMe, userEmail, userEmailValidationError, userPassword, userPasswordValidationError);

        return <div className="login-page">
            <div className="login-page__background-wrapper">
                <div className="login-page__content">
                    <h1 className="login-page__content-h1">Football Betting</h1>
                    <h3 className="login-page__content-h3">Login or register to see upcoming IPO's and to make a bid on them!</h3>
                    <Button raised primary label="Login or Register" onClick={::this.showPopup}/>
                </div>
            </div>

            {inProgressBlockingWindow}

            <Dialog id="login-popup"
                    contentClassName="login-popup__content"
                    visible={isDialogVisible}
                    focusOnMount={false}
                    onHide={::this.closePopup}>

                <TabsContainer onTabChange={::this.handleTabChange} activeTabIndex={activeDialogTab}>
                    <Tabs tabId="login-popup-tab" className="login-popup__tabs">
                        {tabsContent}
                    </Tabs>
                </TabsContainer>
            </Dialog>

        </div>
    }
}

export default TaskListPage;
