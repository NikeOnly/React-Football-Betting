import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../../_utils/decorators/injectProps";
import DateTimeUtils from "../../_utils/DateTimeUtils";
import {createOfferShape} from "../../_shapes";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import CardActions from "react-md/lib/Cards/CardActions";
import Button from "react-md/lib/Buttons/Button";
import Divider from 'react-md/lib/Dividers';

import {OfferStatusToLabel} from "../../_enums/OfferStatusUiConst";


class OfferListItem extends Component {
  static propTypes = {
      offer: createOfferShape(),

      onViewMoreClicked: PropTypes.func,
      onBidClicked: PropTypes.func
  };

    onViewMoreClicked() {
        this.props.onViewMoreClicked(this.props.offer);
    }

    onBidClicked() {
        this.props.onBidClicked(this.props.offer);
    }

    getOfferForRendering(offer) {
        return {
            name: offer.name,
            shortenName: offer.shortenName,
            issuePrice: offer.issuePrice,
            offerSize: offer.offerSize,
            minAmount: offer.minAmount,
            allocation: offer.allocation,
            status: OfferStatusToLabel[offer.status],
            open: DateTimeUtils.formatDate(offer.open),
            payBy: DateTimeUtils.formatDate(offer.payBy)
        }
    }

    @injectProps
    render({offer, onViewMoreClicked, onBidClicked, className, ...restProps}) {
        const decoratedOffer = this.getOfferForRendering(offer);
        return <Card {...restProps}
                     className={`md-cell md-cell-4 offer-item-card ${className || ""}`}
                     raise>
            <div className="card-status-bar card-offer-item-row">
                <div className="offer-item-column primary">IPO</div>
                <div className="offer-item-column secondary">{decoratedOffer.status}</div>
            </div>
            <CardTitle className="offer-item-card__title" title={decoratedOffer.name} subtitle={decoratedOffer.shortenName}/>
            <CardText className="card-offer-content-block">
                <div className="card-offer-item-row md-divider-border md-divider-border--bottom">
                    <div className="offer-item-column primary">
                        <span className="offer-list__title">Issue Price</span>
                        <span className="offer-list__description">{decoratedOffer.issuePrice}</span>
                    </div>
                    <div className="offer-item-column secondary">
                        <span className="offer-list__title">Size Of Offer</span>
                        <span className="offer-list__description">{decoratedOffer.offerSize}</span>
                    </div>
                </div>
                <div className="card-offer-item-row md-divider-border md-divider-border--bottom">
                    <div className="offer-item-column primary">
                        <span className="offer-list__title">Minimum Amount</span>
                        <span className="offer-list__description">{decoratedOffer.minAmount}</span>
                    </div>
                    <div className="offer-item-column secondary">
                        <span className="offer-list__title">Guaranteed Allocation</span>
                        <span className="offer-list__description">{decoratedOffer.allocation}</span>
                    </div>
                </div>
                <div className="card-offer-item-row md-divider-border md-divider-border--bottom">
                    <div className="offer-item-column primary">
                        <span className="offer-list__title">Offer Open</span>
                        <span className="offer-list__description">{decoratedOffer.open}</span>
                    </div>
                    <div className="offer-item-column secondary">
                        <span className="offer-list__title">Pay by</span>
                        <span className="offer-list__description">{decoratedOffer.payBy}</span>
                    </div>
                </div>
            </CardText>
            <CardActions className="offer-item-card__actions">
                <div className="offer-item-column primary">
                    <Button raised secondary label="More Info" className="offer-item-card__actions__btn" onClick={::this.onViewMoreClicked}/>
                </div>
                <div className="offer-item-column secondary">
                    <Button raised primary label="Bid Now" className="offer-item-card__actions__btn" onClick={::this.onBidClicked}/>
                </div>
            </CardActions>
        </Card>

    }
}

export default OfferListItem;
