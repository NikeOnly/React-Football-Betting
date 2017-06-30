import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Autocomplete from 'react-md/lib/Autocompletes';
import Button from "react-md/lib/Buttons/Button";
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import SelectField from 'react-md/lib/SelectFields';

class AddAccountStep2 extends Component {

  @injectProps
  render({ accountVerificationAdresses, closeAddInvestmentAccount, nextActiveTabIndex, address,
    addressError, onAddressChange }) {
    return <div>
      <section className="md-grid add-account-step">
        <h2 className="md-cell">Enter your Address</h2>
        <h4 className="md-cell">If you plan to link this with your HIN, your name and address details needs to match EXACTLY to your CHESS statement</h4>
        <Autocomplete
          id="add-account-address"
          label="Address"
          className="md-cell step1__text-field"
          listClassName="add-investment-account-addresses-autocomplete"
          required
          helpText="Start typing  to see a list of addresses, then select one from the list"
          data={accountVerificationAdresses}
          filter={Autocomplete.caseInsensitiveFilter}
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

export default AddAccountStep2;
