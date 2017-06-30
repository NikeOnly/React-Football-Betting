import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import TextField from "react-md/lib/TextFields";
import FontIcon from "react-md/lib/FontIcons";

class SuccessSignUpTab extends Component {

  @injectProps
  render({onSwitchToLogin}) {

    return <div className="reset-password-content-wrapper">
      <p className="md-selection-control-label md-text successful-sign-up-text">
        You've successfully signed up.
      </p>
      <Button raised primary
              className="login-popup__content__action-btn"
              label="Click to login"
              onClick={onSwitchToLogin}
      />
    </div>
  }
}

export default SuccessSignUpTab;
