import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import TextField from "react-md/lib/TextFields";
import FontIcon from "react-md/lib/FontIcons";

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import {GOOGLE_CLIENT_ID} from '../../_constants/actions';
import {FACEBOOK_APP_ID} from '../../_constants/actions';

class FormInputs extends Component {

    @injectProps
    render({email, emailValidationError, password, passwordValidationError,
      onEmailChanged, onPasswordChanged,
      onResponseGoogle, onResponseFacebook
    }) {

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
                    <FacebookLogin
                      appId={FACEBOOK_APP_ID}
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={onResponseFacebook}
                      cssClass="login-form_sn-btn md-btn md-btn--raised md-background--primary md-background--primary-hover md-btn--text"
                      icon={<FontIcon className="fa fa-facebook login-form_sn-icon facebook" />}
                    />

                </div>
                <div className="login-form_sn-btn-wrapper google">
                    <GoogleLogin
                      clientId={GOOGLE_CLIENT_ID}
                      className="login-form_sn-btn md-btn md-btn--raised md-background--primary md-background--primary-hover md-btn--text"
                      onSuccess={onResponseGoogle}
                      onFailure={onResponseGoogle}
                    >
                      <FontIcon className="fa fa-google login-form_sn-icon google" /><span> Login With Google</span>
                    </GoogleLogin>
                </div>
            </div>
        </div>
    }
}

export default FormInputs;
