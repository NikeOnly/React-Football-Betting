import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import FormInputs from "./FormInputs";

class SignupForm extends Component {

    @injectProps
    render({userEmail, userEmailValidationError, userPassword, userPasswordValidationError,
      onEmailChanged, onPasswordChanged, onSignUpClicked,
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
        <Button raised primary
                className="login-popup__content__action-btn greater-top-margin"
                label="Sign Up"
                onClick={onSignUpClicked}
        />
      </div>
    }
}

export default SignupForm;
