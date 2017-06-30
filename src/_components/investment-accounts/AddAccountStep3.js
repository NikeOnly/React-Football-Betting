import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import SelectField from 'react-md/lib/SelectFields';

class AddAccountStep3 extends Component {

  @injectProps
  render({ closeAddInvestmentAccount, nextActiveTabIndex, accountNameRefund, bsbRefund, accountNumberRefund,
    onAccountNameRefundChange, onBsbRefundChange, onAccountNumberRefundChange }) {
    return <div>
      <section className="md-grid add-account-step">
        <h2 className="md-cell">Nominate a refund account</h2>
        <h4 className="md-cell">If any of your bids needs to be refunded, this will be the account we deposit the money into</h4>
        <TextField
          id="add-account-name-refund"
          label="Account Name"
          className="md-cell step1__text-field"
          value={accountNameRefund}
          onChange={onAccountNameRefundChange}
        />
        <TextField
          id="add-account-BSB-refund"
          label="BSB"
          className="md-cell step1__text-field step1__text-field_BSB"
          fullWidth={false}
          value={bsbRefund}
          onChange={onBsbRefundChange}
        />
        <TextField
          id="add-account-number-refund"
          label="Account Number"
          className="md-cell step1__text-field"
          fullWidth={false}
          value={accountNumberRefund}
          onChange={onAccountNumberRefundChange}
        />
      </section>
      <Divider />
      <div className="add-account__btn-section">
        <Button
          flat
          className="add-account__btn-cancel"
          label="Cancel"
          onClick={closeAddInvestmentAccount}
        />
        <Button
          raised
          secondary
          className=""
          label="Next"
          onClick={nextActiveTabIndex}
        />
      </div>
    </div>
  }
}

export default AddAccountStep3;
