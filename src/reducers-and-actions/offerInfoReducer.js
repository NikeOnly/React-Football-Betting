import PropTypes from 'prop-types';
import {LOAD_OFFER__LIST, LOAD_ACCOUNT_VERIFICATION_ADDRESSES} from "../_constants/actions";
import {createOfferShape} from "../_shapes";

// Make more declarative reducer's state using just react props for that...
const REDUCER_SCHEMA = {
  offerList: PropTypes.arrayOf(createOfferShape()),
  accountVerificationAdresses: PropTypes.arrayOf(createOfferShape())
};

const INITIAL_STATE = {
  offerList: null,
  accountVerificationAdresses: null
};

const reducerMap = {
  [LOAD_OFFER__LIST]: (state, httpResponse) => {
    if (httpResponse.status != 200 || httpResponse.data.errorMessage) {
      return {offerList: null}
    } else {
      return {offerList: httpResponse.data}
    }
  },
  [LOAD_ACCOUNT_VERIFICATION_ADDRESSES]: (state, httpResponse) => {
    if (httpResponse.status != 200 || httpResponse.data.errorMessage) {
      return {accountVerificationAdresses: null}
    } else {
      return {accountVerificationAdresses: httpResponse.data}
    }

  }
};

export default(state = INITIAL_STATE, action) => {
  let stateUpdates = state;

  const reducer = reducerMap[action.type];
  if (reducer) {
    stateUpdates = reducer(state, action.payload);
  }

  return stateUpdates == state? state: {...state, ...stateUpdates};
}
