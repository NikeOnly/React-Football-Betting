import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import TextField from "react-md/lib/TextFields";
import FontIcon from "react-md/lib/FontIcons";

class ForgetPasswordCodeTab extends Component {

  @injectProps
  render({code, codeValidationError, onCodeChanged, onForgetPasswordBackClicked, onApplyCodeClicked}) {

    return <div className="reset-password-content-wrapper">
      <p className="md-selection-control-label md-text reset-password-text">
        Please enter the code, that was sent to your email address.
      </p>
      <TextField
        label="Code"
        placeholder="your code"
        leftIcon={<FontIcon> lock </FontIcon>}
        value={code}
        // error={Boolean(codeValidationError)}
        // errorText={codeValidationError}
        onChange={onCodeChanged}
      />

      <Button
        raised primary
        className="login-popup__content__action-btn"
        label="Apply Code"
        onClick={onApplyCodeClicked}/>

      <Button
        raised secondary
        className="login-popup__content__action-btn"
        label="Back"
        onClick={onForgetPasswordBackClicked}/>
    </div>
  }
}

export default ForgetPasswordCodeTab;
