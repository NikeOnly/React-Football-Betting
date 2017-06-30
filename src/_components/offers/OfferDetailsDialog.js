import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../../_utils/decorators/injectProps";
import {createOfferShape} from "../../_shapes";
import Button from "react-md/lib/Buttons/Button";
import Dialog from "react-md/lib/Dialogs";
import Divider from 'react-md/lib/Dividers';
import FileInput from 'react-md/lib/FileInputs';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';
import Toolbar from 'react-md/lib/Toolbars';
import DateTimeUtils from "../../_utils/DateTimeUtils";
import {OfferStatusToLabel} from "../../_enums/OfferStatusUiConst";


class OfferDetailsDialog extends Component {
    static propTypes = {
        offer: createOfferShape().isRequired,
        hidden: PropTypes.bool,

        onBackBtnClicked: PropTypes.func
    };

    static defaultProps = {
        hidden: true
    }

    shouldComponentUpdate(nextProps, nextState) {
      return this.props.hidden != nextProps.hidden || this.state != nextState;
    }

    onBackBtnClicked() {
      this.props.onBackBtnClicked(this.props.offer);
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
    render({offer, hidden, onBackBtnClicked, ...restProps}) {
        if (hidden) {
          return null;
        }

        const nav = <Button flat label="< Back" onClick={::this.onBackBtnClicked} />;
        const decoratedOffer = this.getOfferForRendering(offer);

        return <div>
          <Toolbar
            colored
            nav={nav}
            title="Raising Offers"
            className="view-more__toolbar"
          />
          <Paper
            zDepth={1}
            className="view-more__paper"
          >

            <div className="view-more__header">
                <div className="">IPO</div>
                <div className="">{decoratedOffer.status}</div>
            </div>
            <h1 className="view-more__title">{decoratedOffer.name}</h1>
            <h3 className="view-more__subtitle">{decoratedOffer.shortenName}</h3>
            <Divider />

            <div className="card-offer-item-row">
                <div className="offer-item-column primary">
                    <span className="offer-list__title">Issue Price</span>
                    <span className="offer-list__description">{decoratedOffer.issuePrice}</span>
                </div>
                <div className="offer-item-column secondary">
                    <span className="offer-list__title">Size Of Offer</span>
                    <span className="offer-list__description">{decoratedOffer.offerSize}</span>
                </div>
            </div>
            <div className="card-offer-item-row">
                <div className="offer-item-column primary">
                    <span className="offer-list__title">Minimum Amount</span>
                    <span className="offer-list__description">{decoratedOffer.minAmount}</span>
                </div>
                <div className="offer-item-column secondary">
                    <span className="offer-list__title">Guaranteed Allocation</span>
                    <span className="offer-list__description">{decoratedOffer.allocation}</span>
                </div>
            </div>
            <div className="card-offer-item-row">
                <div className="offer-item-column primary">
                    <span className="offer-list__title">Offer Open</span>
                    <span className="offer-list__description">{decoratedOffer.open}</span>
                </div>
                <div className="offer-item-column secondary">
                    <span className="offer-list__title">Pay by</span>
                    <span className="offer-list__description">{decoratedOffer.payBy}</span>
                </div>
            </div>
            <div className="view-more-file-input-column">
                <header className="view-more-file-input-column__header">Documents</header>
                <a className="view-more__link" href="#"><FontIcon>insert_drive_file</FontIcon> Prospectus Original</a>
                <a className="view-more__link" href="#"><FontIcon>insert_drive_file</FontIcon> Prospectus Revised</a>
            </div>

            <p className="view-more_text">Suspendisse potenti. Integer luctus arcu quis urna suscipit placerat. Curabitur nec bibendum mauris. Vivamus vestibulum hendrerit dui, eget fringilla urna laoreet maximus. Integer at purus quis nisl dignissim rhoncus. Integer eget arcu enim. Suspendisse sagittis ante at odio bibendum, consequat faucibus leo dictum. Vivamus cursus ante porttitor, pulvinar neque non, tristique mauris. Quisque at rhoncus diam.</p>

            <Divider />
            <div className="view-more__bid-btn">
              <Button raised secondary
                className=""
                label="Bid"
                onClick={::this.onBackBtnClicked}
              />
            </div>
          </Paper>
        </div>
    }
}

export default OfferDetailsDialog;
