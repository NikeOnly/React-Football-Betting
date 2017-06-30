import {combineReducers} from "redux";
import userInfoReducer from "./reducers-and-actions/userInfoReducer";
import offerInfoReducer from "./reducers-and-actions/offerInfoReducer";

const rootReducer = combineReducers({
    userInfoReducer,
    offerInfoReducer
});

export default rootReducer;
