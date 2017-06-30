import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import SelectField from 'react-md/lib/SelectFields';

class AddAccountStep1 extends Component {

  @injectProps
  render({ investmentAccountTypes, closeAddInvestmentAccount, nextActiveTabIndex, onApplicant1Change, onInvestmentAccountNameChange,
    applicant1, applicant1Error, investmentAccountName, investmentAccountNameError }) {
    return <div>
      <section className="md-grid add-account-step">
        <SelectField
          id="add-account-types"
          label="Investment Account Type"
          menuItems={investmentAccountTypes}
          itemLabel="name"
          itemValue="abbreviation"
          className="md-cell step1__text-field"
          required
        />
        <TextField
          id="investment-account-applicant"
          label="Applicant 1"
          className="md-cell step1__text-field"
          required
          value={applicant1}
          onChange={onApplicant1Change}
        />
        <TextField
          id="add-account-name"
          label="Investment Account Name"
          className="md-cell step1__text-field"
          helpText="You can enter an investment profile name if you need it to be different then the applicant name/company name/super fund"
          value={investmentAccountName}
          onChange={onInvestmentAccountNameChange}
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

export default AddAccountStep1;
