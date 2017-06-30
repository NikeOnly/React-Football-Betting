import React, {Component} from "react";
import {connect} from "react-redux";
import injectProps from "../../_utils/decorators/injectProps";

import Button from "react-md/lib/Buttons/Button";
import Dialog from "react-md/lib/Dialogs";
import Tab from "react-md/lib/Tabs/Tab";
import Tabs from "react-md/lib/Tabs/Tabs";
import TabsContainer from "react-md/lib/Tabs/TabsContainer";
import Radio from 'react-md/lib/SelectionControls/Radio';
import AddAccountStep1 from './AddAccountStep1';
import AddAccountStep2 from './AddAccountStep2';
import AddAccountStep3 from './AddAccountStep3';
import AddAccountStep4 from './AddAccountStep4';
import AddAccountRadioToolbar from './AddAccountRadioToolbar';

class AddInvestmentAccount extends Component {

  @injectProps
  render({ accountVerificationAdresses, activeTabIndex, isAddProfileVisible, investmentAccountTypes,
    applicant1, applicant1Error, investmentAccountName, investmentAccountNameError,
    address, addressError, accountNameRefund, bsbRefund, accountNumberRefund, hin,
    closeAddInvestmentAccount, saveInvestmentAccount, nextActiveTabIndex, handleTabChange,
    onApplicant1Change, onInvestmentAccountNameChange, onAddressChange,
    onAccountNameRefundChange, onBsbRefundChange, onAccountNumberRefundChange, onHinChange }) {

    return <Dialog
        id="offers-add-popup"
        visible={isAddProfileVisible}
        title="Investment Account"
        focusOnMount={false}
        contentStyle={{padding: 0}}
        modal="false"
      >
        <AddAccountRadioToolbar activeTabIndex={activeTabIndex} />

        <TabsContainer
          onTabChange={handleTabChange}
          activeTabIndex={activeTabIndex}
          colored
          >
            <Tabs
              tabId="add-account"
              style={{display: 'none'}}
            >
              <Tab label="Step1">
                <AddAccountStep1
                  investmentAccountTypes={investmentAccountTypes}
                  applicant1={applicant1}
                  applicant1Error={applicant1Error}
                  investmentAccountName={investmentAccountName}
                  investmentAccountNameError={investmentAccountNameError}
                  onApplicant1Change={onApplicant1Change}
                  onInvestmentAccountNameChange={onInvestmentAccountNameChange}
                  closeAddInvestmentAccount={closeAddInvestmentAccount}
                  nextActiveTabIndex={nextActiveTabIndex}
                />
              </Tab>

              <Tab label="Step2">
                <AddAccountStep2
                  accountVerificationAdresses={accountVerificationAdresses}
                  address={address}
                  addressError={addressError}
                  onAddressChange={onAddressChange}
                  closeAddInvestmentAccount={closeAddInvestmentAccount}
                  nextActiveTabIndex={nextActiveTabIndex}
                />
              </Tab>

              <Tab label="Step3">
                <AddAccountStep3
                  accountNameRefund={accountNameRefund}
                  bsbRefund={bsbRefund}
                  accountNumberRefund={accountNumberRefund}
                  onAccountNameRefundChange={onAccountNameRefundChange}
                  onBsbRefundChange={onBsbRefundChange}
                  onAccountNumberRefundChange={onAccountNumberRefundChange}
                  closeAddInvestmentAccount={closeAddInvestmentAccount}
                  nextActiveTabIndex={nextActiveTabIndex}
                />
              </Tab>

              <Tab label="Step4">
                <AddAccountStep4
                  hin={hin}
                  onHinChange={onHinChange}
                  closeAddInvestmentAccount={closeAddInvestmentAccount}
                  saveInvestmentAccount={saveInvestmentAccount}
                />
              </Tab>
            </Tabs>
          </TabsContainer>
        </Dialog>
  }
}

export default AddInvestmentAccount;
