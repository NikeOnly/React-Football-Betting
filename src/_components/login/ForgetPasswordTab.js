import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import TextField from "react-md/lib/TextFields";
import FontIcon from "react-md/lib/FontIcons";

class ForgetPasswordTab extends Component {

  @injectProps
  render({userEmail, emailValidationError, onEmailChanged, onForgetPasswordBackClicked, onResetPasswordClicked}) {
    return <div className="reset-password-content-wrapper">
      <p className="md-selection-control-label md-text reset-password-text">
        Please enter your email address. We will send you an email to reset your password.
      </p>
      <TextField
        label="Email"
        placeholder="your.email@example.com"
        type="email"
        leftIcon={<FontIcon> email </FontIcon>}
        value={userEmail}
        error={Boolean(emailValidationError)}
        errorText={emailValidationError}
        onChange={onEmailChanged}/>

      <Button
        raised primary
        className="login-popup__content__action-btn"
        label="Send Email"
        onClick={onResetPasswordClicked}/>

      <Button
        raised secondary
        className="login-popup__content__action-btn"
        label="Back"
        onClick={onForgetPasswordBackClicked}/>
    </div>
  }
}

export default ForgetPasswordTab;
