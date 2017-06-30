import axios from 'axios';
import {USER_LOGIN_WITH_CREDS} from "../_constants/actions";
import {USER_SIGNUP_WITH_CREDS} from "../_constants/actions";
import {USER_LOGOUT_WITH_CREDS} from "../_constants/actions";

import {USER_SIGNUP_WITH_GOOGLE} from "../_constants/actions";
import {USER_SIGNUP_WITH_FACEBOOK} from "../_constants/actions";

export function login(email, password, rememberMe) {

  var request = axios.post('/rest/login/internal', {
    email: email,
    password: password,
    rememberMe: rememberMe
  });

  return {
    type: USER_LOGIN_WITH_CREDS,
    payload: request
  }
}

export function signup(email, password) {

  var request = axios.post('/rest/sign-up/internal', {
    email: email,
    password: password
  });

  return {
    type: USER_SIGNUP_WITH_CREDS,
    payload: request
  }
}

export function googleAuth(request) {

  return {
    type: USER_SIGNUP_WITH_GOOGLE,
    payload: request
  }
}

export function facebookAuth(request) {

  return {
    type: USER_SIGNUP_WITH_FACEBOOK,
    payload: request
  }
}



export function logout() {
  return {
    type: USER_LOGOUT_WITH_CREDS,
    payload: {}
  }
}
