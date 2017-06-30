import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import Checkbox from "react-md/lib/SelectionControls/Checkbox";
import FormInputs from "./FormInputs";

class LoginForm extends Component {

    @injectProps
    render({userEmail, userEmailValidationError, userPassword, userPasswordValidationError,
      onEmailChanged, onPasswordChanged, rememberMe, onRememberMeChecked, onForgetPasswordClicked, onLoginClicked,
      onResponseFacebook, onResponseGoogle
    }) {

        return <div>
        <FormInputs
            email={userEmail}
            emailValidationError={userEmailValidationError}
            onEmailChanged={onEmailChanged}
            password={userPassword}
            passwordValidationError={userPasswordValidationError}
            onPasswordChanged={onPasswordChanged}
            onResponseFacebook={onResponseFacebook}
            onResponseGoogle={onResponseGoogle}
        />

        <div className="login-popup-tab__login-options-row">
            <Checkbox id="remember-me"
                      name="remember-me"
                      label="Remember me"
                      className="login-popup-tab__login-options__remember-me"
                      checked={rememberMe}
                      onChange={onRememberMeChecked}/>
            <span
                  onClick={onForgetPasswordClicked}
                  className="md-selection-control-label md-pointer--hover md-text login-popup-tab__login-options__forget-password">
                            Don't remember your password?
                        </span>
        </div>
        <Button raised primary
                className="login-popup__content__action-btn"
                label="Login"
                onClick={onLoginClicked}
        />      
      </div>
    }
}

export default LoginForm;
