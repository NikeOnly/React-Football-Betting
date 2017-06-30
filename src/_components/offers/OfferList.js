import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../../_utils/decorators/injectProps";
import {createOfferShape} from "../../_shapes";
import OfferListItem from "./OfferListItem";

import FontIcon from 'react-md/lib/FontIcons';
import Button from "react-md/lib/Buttons/Button";

class OfferList extends Component {
    static propTypes = {
        offerList: PropTypes.arrayOf(createOfferShape()).isRequired,

        onViewMoreClicked: PropTypes.func,
        onBidClicked: PropTypes.func
    };

    shouldComponentUpdate(nextProps) {
        return this.props.offerList != nextProps.offerList;
    }

    @injectProps
    render({offerList, className, itemClassName, fireOfferListLoading, reloadBtnDisabled, ...restProps}) {

        if (!offerList.length) {
            return <div className="no-offers">
              <FontIcon forceSize={true, 36} forceFontSize={36}>find_in_page</FontIcon>
              <p>No offers found.</p>
            </div>
        }

        const renderedOfferList = offerList.map(offer => <OfferListItem {...restProps} className={itemClassName} key={`offer-item-${offer.id}`} offer={offer}/>);

        return <div className={`md-grid ${className || ""}`}>
          {renderedOfferList}
        </div>
    }
}

export default OfferList;
