import React, {Component} from "react";
import injectProps from "../../_utils/decorators/injectProps";
import Button from "react-md/lib/Buttons/Button";
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';

class AddAccountStep4 extends Component {

  @injectProps
  render({ closeAddInvestmentAccount, saveInvestmentAccount, hin, onHinChange }) {
    return <div>
      <section className="md-grid add-account-step">
        <h2 className="md-cell">Link your shares to your broker account</h2>
        <h4 className="md-cell">Your name and address details need to match EXACTLY to your CHESS statement.</h4>
        <TextField
          id="add-account-HIN"
          label="HIN"
          className="md-cell step1__text-field"
          fullWidth={false}
          helpText="You can enter your HIN at a later time"
          value={hin}
          onChange={onHinChange}
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
          label="Save"
          onClick={saveInvestmentAccount}
        />
      </div>
    </div>
  }
}

export default AddAccountStep4;
