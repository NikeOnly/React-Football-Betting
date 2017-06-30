import {LOAD_OFFER__LIST, LOAD_ACCOUNT_VERIFICATION_ADDRESSES} from "../_constants/actions";
import * as OfferStatusEnum from "../_enums/OfferStatus";
import axios from 'axios';

export function loadOfferList() {

  var request = axios.get('/rest/offers');

  return {
    type: LOAD_OFFER__LIST,
    payload: request
  }
}

export function loadAccountVerificationAdresses() {

  var request = axios.get('/rest/input-info');

  return {
    type: LOAD_ACCOUNT_VERIFICATION_ADDRESSES,
    payload: request
  }
}
