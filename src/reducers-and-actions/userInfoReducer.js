import PropTypes from 'prop-types';
import {USER_LOGIN_WITH_CREDS} from "../_constants/actions";
import {USER_SIGNUP_WITH_CREDS} from "../_constants/actions";
import {USER_SIGNUP_WITH_GOOGLE} from "../_constants/actions";
import {USER_SIGNUP_WITH_FACEBOOK} from "../_constants/actions";
import {USER_LOGOUT_WITH_CREDS} from "../_constants/actions";
import * as AuthStatusEnum from "../_enums/AuthStatus";

// Make more declarative reducer's state using just react props for that...
const REDUCER_SCHEMA = {
    authStatus: PropTypes.oneOf(Object.keys(AuthStatusEnum)),
    email: PropTypes.string
};

const INITIAL_STATE = {
    authStatus: AuthStatusEnum.NOT_AUTHORIZED,
    // authStatus: AuthStatusEnum.AUTHORIZED,
    name: null,
    email: null
};

const reducerMap = {
    [USER_LOGIN_WITH_CREDS]: (state, httpResponse) => {

        if (httpResponse.status != 200 || httpResponse.data.errorMessage) {
            return {authStatus: AuthStatusEnum.AUTHORIZATION_ERROR}
        } else {
            return {authStatus: AuthStatusEnum.AUTHORIZED,
              name: httpResponse.data.name || 0,
              email: httpResponse.data.email || 0}
        }
    },
    [USER_SIGNUP_WITH_CREDS]: (state, httpResponse) => {

        if (httpResponse.status != 200 || httpResponse.data.errorMessage) {
            return {authStatus: AuthStatusEnum.AUTHORIZATION_ERROR}
        } else {
            return {authStatus: AuthStatusEnum.NOT_AUTHORIZED,
              name: httpResponse.data.name || 0,
              email: httpResponse.data.email || 0}
        }
    },
    [USER_SIGNUP_WITH_GOOGLE]: (state, httpResponse) => {
        return {authStatus: AuthStatusEnum.AUTHORIZED,
          name: httpResponse.w3.ig,
          email: httpResponse.w3.U3
        }
    },
    [USER_SIGNUP_WITH_FACEBOOK]: (state, httpResponse) => {
        return {authStatus: AuthStatusEnum.AUTHORIZED,
          name: httpResponse.name,
          email: httpResponse.email
        }
    },
    [USER_LOGOUT_WITH_CREDS]: (state, httpResponse) => {
        return {authStatus: AuthStatusEnum.NOT_AUTHORIZED, email: httpResponse.email};
    }
};


export default (state = INITIAL_STATE, action) => {
    let stateUpdates = state;

    const reducer = reducerMap[action.type];
    if (reducer) {
        stateUpdates = reducer(state, action.payload);
    }

    return stateUpdates == state ? state : {...state, ...stateUpdates};
}
