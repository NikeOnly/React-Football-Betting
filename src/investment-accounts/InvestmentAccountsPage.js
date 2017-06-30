import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../_utils/decorators/injectProps";

import Button from "react-md/lib/Buttons/Button";
import Paper from 'react-md/lib/Papers';
import Divider from 'react-md/lib/Dividers';

import AddInvestmentAccount from '../_components/investment-accounts/AddInvestmentAccount';

class InvestmentAccountsPage extends Component {
  static propTypes = {
      // offer: createOfferShape().isRequired,
      hidden: PropTypes.bool,

      isAddProfileVisible: PropTypes.string,
      activeTabIndex: PropTypes.string,
      investmentAccountTypes: PropTypes.string,
      applicant1: PropTypes.string,
      applicant1Error: PropTypes.string,
      investmentAccountName: PropTypes.string,
      investmentAccountNameError: PropTypes.string,
      address: PropTypes.string,
      addressError: PropTypes.string,
      accountNameRefund: PropTypes.string,
      bsbRefund: PropTypes.string,
      accountNumberRefund: PropTypes.string,
      hin: PropTypes.string,

      onApplicant1Change: PropTypes.func,
      onInvestmentAccountNameChange: PropTypes.func,
      onAddressChange: PropTypes.func,
      onAccountNameRefundChange: PropTypes.func,
      onBsbRefundChange: PropTypes.func,
      onAccountNumberRefundChange: PropTypes.func,
      onHinChange: PropTypes.func,

      onAddInvestmentAccount: PropTypes.func,
      closeAddInvestmentAccount: PropTypes.func,
      saveInvestmentAccount: PropTypes.func,
      handleTabChange: PropTypes.func,
      nextActiveTabIndex: PropTypes.func

  };

  static defaultProps = {
      hidden: true
  }

  constructor(props) {
    super(props);

    this.state = this.getDefaultState();
  }

  getDefaultState() {
      return {
          isAddProfileVisible: false,
          activeTabIndex: 0,
          investmentAccountTypes: ['Standart', 'Special'],
          applicant1: "",
          applicant1Error: null,
          investmentAccountName: "",
          investmentAccountNameError: null,
          address: "",
          addressError: null,
          accountNameRefund: "",
          bsbRefund: "",
          accountNumberRefund: "",
          hin: ""
      }
  }

  onApplicant1Change(applicant1, applicant1Error) {
    this.setState({ applicant1, applicant1Error: null });
  }

  onInvestmentAccountNameChange(investmentAccountName, investmentAccountNameError) {
    this.setState({ investmentAccountName, investmentAccountNameError: null });
  }

  onAddressChange(address, addressError) {
    this.setState({ address, addressError: null });
  }

  onAccountNameRefundChange(accountNameRefund) {
    this.setState({ accountNameRefund });
  }

  onBsbRefundChange(bsbRefund) {
    this.setState({ bsbRefund });
  }

  onAccountNumberRefundChange(accountNumberRefund) {
    this.setState({ accountNumberRefund });
  }

  onHinChange(hin) {
    this.setState({ hin });
  }

  onAddInvestmentAccount() {
    this.setState({ isAddProfileVisible: true });
    this.props.loadAccountVerificationAdresses();
  }

  closeAddInvestmentAccount() {
    this.setState({ isAddProfileVisible: false, activeTabIndex: 0 });
  }

  saveInvestmentAccount() {
    this.setState({ isAddProfileVisible: false, activeTabIndex: 0 });
  }


  handleTabChange(activeTabIndex) {
    this.setState({ activeTabIndex });
  }

  nextActiveTabIndex() {
    this.setState({ activeTabIndex: this.state.activeTabIndex + 1 });
  }

  @injectProps
  render({userInfo, login, accountVerificationAdresses}) {
    const { activeTabIndex, isAddProfileVisible, investmentAccountTypes, applicant1, applicant1Error,
    investmentAccountName, investmentAccountNameError, address, addressError,
    accountNameRefund, bsbRefund, accountNumberRefund, hin } = this.state;

    return <div>
      <h3 className="bids-header">Investment Account</h3>
      <div className="tab__wrapper">
        <Paper zDepth={1} className="tabs__paper">
          <div className="investment-account__header">
            <Button raised secondary className="investment-account__add-btn" label="Add Investment Account" onClick={::this.onAddInvestmentAccount}/>
          </div>
          <Divider/>
          <div className="investment-account__row-text">
            <ul className="investment-account__list">
              <li className="investment-account__text">Name</li>
              <li className="investment-account__text">Adress</li>
              <li className="investment-account__text">Amount Outstanding</li>
            </ul>
            <p className="text-BPAY">BPAY</p>
          </div>
          <h3 className="tabs__header">Create your first profile, you will need one if you plan to bid on any offers</h3>
          <Button raised secondary className="tabs__show-offers-btn" label="Create your first profile" />
        </Paper>
      </div>

      <AddInvestmentAccount
        accountVerificationAdresses={accountVerificationAdresses}
        activeTabIndex={activeTabIndex}
        isAddProfileVisible={isAddProfileVisible}
        investmentAccountTypes={investmentAccountTypes}
        applicant1={applicant1}
        applicant1Error={applicant1Error}
        investmentAccountName={investmentAccountName}
        investmentAccountNameError={investmentAccountNameError}
        address={address}
        addressError={addressError}
        accountNameRefund={accountNameRefund}
        bsbRefund={bsbRefund}
        accountNumberRefund={accountNumberRefund}
        hin={hin}
        handleTabChange={::this.handleTabChange}
        nextActiveTabIndex={::this.nextActiveTabIndex}
        closeAddInvestmentAccount={::this.closeAddInvestmentAccount}
        saveInvestmentAccount={::this.saveInvestmentAccount}

        onApplicant1Change={::this.onApplicant1Change}
        onInvestmentAccountNameChange={::this.onInvestmentAccountNameChange}
        onAddressChange={::this.onAddressChange}
        onAccountNameRefundChange={::this.onAccountNameRefundChange}
        onBsbRefundChange={::this.onBsbRefundChange}
        onAccountNumberRefundChange={::this.onAccountNumberRefundChange}
        onHinChange={::this.onHinChange}
      />
    </div>
  }
}

export default InvestmentAccountsPage;
