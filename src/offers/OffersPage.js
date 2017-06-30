import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../_utils/decorators/injectProps";
import {createOfferShape} from "../_shapes";
import OfferList from "../_components/offers/OfferList";
import ProgressBarPrimary from "../_components/ProgressBarPrimary";
import OfferBidDialog from "../_components/offers/OfferBidDialog";
import OfferDetailsDialog from "../_components/offers/OfferDetailsDialog";

import Button from "react-md/lib/Buttons/Button";

class OffersPage extends Component {
    static propTypes = {
        offerList: PropTypes.arrayOf(createOfferShape()),

        // Actions
        loadOfferList: PropTypes.func,
        loadAccountVerificationAdresses: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoadingOfferList: props.offerList == null,
            offerForBid: null,
            offerForViewMore: null,
            offerMoreInfo: false,
            reloadBtnDisabled: false,
        }
    }

    componentDidMount() {
        if (this.props.offerList == null) {
            this.fireOfferListLoading();
        }
    }

    fireOfferListLoading() {
        if (!this.state.isLoadingOfferList) {
            this.setState({isLoadingOfferList: true});
        } else {
            // TODO make reject the promise of 'loadOfferList' action if any exists....
        }

        setTimeout(() => {
            this.setState({isLoadingOfferList: false});
            this.props.loadOfferList();
            this.props.loadAccountVerificationAdresses()
        }, 3000);
    }

    componentWillUnmount() {
        // TODO make reject the promise of 'loadOfferList' action if any exists....
    }

    onViewMoreClicked(offer) {
      this.setState({offerForViewMore: offer, offerMoreInfo: true, reloadBtnDisabled: true});
    }

    onBidClicked(offer) {
      this.setState({offerForBid: offer, offerMoreInfo: false, reloadBtnDisabled: true});
    }

    onOfferBidSubmitted(offer, accountInfo) {
      // TODO make some ajax call

      this.setState({offerForBid: null, reloadBtnDisabled: false});
    }

    onOfferBidCancelled(offer) {
      this.setState({offerForBid: null, reloadBtnDisabled: false});
    }

    onOfferViewMoreBack(offer) {
      this.setState({offerForViewMore: null, offerMoreInfo: false, reloadBtnDisabled: false});
    }

    @injectProps
    render({offerList, accountVerificationAdresses}) {

      if (this.state.isLoadingOfferList || offerList == null) {
          return <ProgressBarPrimary style={{position: 'absolute', margin: 0}} />
      }

      const { offerForBid, offerForViewMore, offerMoreInfo, reloadBtnDisabled } = this.state;

      const offerDialogContent = offerMoreInfo
        ? <OfferDetailsDialog hidden={!offerForViewMore}
            offer={offerForViewMore}
            onBackBtnClicked={::this.onOfferViewMoreBack}
          />
        : <OfferList offerList={offerList}
            reloadBtnDisabled={reloadBtnDisabled}
            onViewMoreClicked={::this.onViewMoreClicked}
            onBidClicked={::this.onBidClicked}
            fireOfferListLoading={::this.fireOfferListLoading}
          />;
          return <div>
            {offerDialogContent}

            <div className="reload-fixed">
              <Button
                secondary
                floating
                disabled={reloadBtnDisabled}
                style={{position: 'fixed'}}
                onClick={::this.fireOfferListLoading}
              >
                refresh
              </Button>
            </div>

            <OfferBidDialog hidden={!offerForBid}
              offer={offerForBid}
              onSubmitBtnClicked={::this.onOfferBidSubmitted}
              onCancelBtnClicked={::this.onOfferBidCancelled}
              accountVerificationAdresses={accountVerificationAdresses}
            />
        </div>
    }
}

export default OffersPage;
