import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import injectProps from "../_utils/decorators/injectProps";
import {loadOfferList, loadAccountVerificationAdresses} from "../reducers-and-actions/offerInfoActions";
import OffersPage from "./OffersPage";


const mapStateToProps = (store) => {
    return {...store.offerInfoReducer};
};

const mapActionsToDispatcher = {
    loadOfferList,
    loadAccountVerificationAdresses
};

@connect(mapStateToProps, mapActionsToDispatcher)
class OffersContainer extends Component {

    @injectProps
    render({...restProps}) {

        return <OffersPage {...restProps}/>
    }
}

export default OffersContainer;
