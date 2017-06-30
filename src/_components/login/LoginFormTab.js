import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import TextField from "react-md/lib/TextFields";
import FontIcon from "react-md/lib/FontIcons";

class LoginFormTab extends Component {

    @injectProps
    render({email, emailValidationError, password, passwordValidationError, facebookBtnLabel, googleBtnLabel, onEmailChanged, onPasswordChanged, onFacebookClick, onGoogleClick}) {

        return <div className="login-form">
            <TextField
                label="Email"
                placeholder="your.email@example.com"
                type="email"
                leftIcon={<FontIcon>email</FontIcon>}
                value={email}
                error={Boolean(emailValidationError)}
                errorText={emailValidationError}
                onChange={onEmailChanged}
            />
            <TextField
                label="Password"
                placeholder="your password"
                type="password"
                leftIcon={<FontIcon>lock</FontIcon>}
                value={password}
                error={Boolean(passwordValidationError)}
                errorText={passwordValidationError}
                onChange={onPasswordChanged}
            />

            <p className="login-form_or-text-divider md-tab-label">OR</p>

            <div className="login-form_sn-btn-row">
                <div className="login-form_sn-btn-wrapper facebook">
                    <Button raised primary
                            className="login-form_sn-btn"
                            iconClassName="fa fa-facebook login-form_sn-icon facebook"
                            label={facebookBtnLabel}
                            onClick={onFacebookClick}
                    />
                </div>
                <div className="login-form_sn-btn-wrapper google">
                    <Button raised primary
                            className="login-form_sn-btn"
                            iconClassName="fa fa-google login-form_sn-icon google"
                            label={googleBtnLabel}
                            onClick={onGoogleClick}
                    />
                </div>
            </div>
        </div>
    }
}

export default LoginFormTab;
