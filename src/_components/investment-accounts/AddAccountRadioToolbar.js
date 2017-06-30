import React, {Component} from "react";
import {connect} from "react-redux";
import injectProps from "../../_utils/decorators/injectProps";

import Button from "react-md/lib/Buttons/Button";
import Dialog from "react-md/lib/Dialogs";
import Divider from 'react-md/lib/Dividers';
import Tab from "react-md/lib/Tabs/Tab";
import Tabs from "react-md/lib/Tabs/Tabs";
import TabsContainer from "react-md/lib/Tabs/TabsContainer";
import TextField from 'react-md/lib/TextFields';
import Radio from 'react-md/lib/SelectionControls/Radio';
import SelectField from 'react-md/lib/SelectFields';

class AddAccountRadioToolbar extends Component {

  @injectProps
  render({ activeTabIndex }) {

    return <div className="add-investment-account__radio-box">
      <div className="add-investment-account__radios">
        <Radio
          id="inlineRadio1"
          name="inlineRadios"
          value={1}
          checked={activeTabIndex === 0}
          checkedIconChildren="1"
          checkedIconClassName="add-investment-account__radio_checked"
          uncheckedIconChildren="1"
          uncheckedIconClassName="add-investment-account__radio_unchecked"
        />
        <Radio
          id="inlineRadio2-1"
          name="inlineRadios"
          value={2}
          checked={activeTabIndex === 1 || activeTabIndex === 2 || activeTabIndex === 3 }
          className="add-investment-account__radio_second"
          checkedIconChildren="done"
          checkedIconClassName="add-investment-account__radio_checked material-icons"
          uncheckedIconChildren=""
          uncheckedIconClassName=""
        />
        <label htmlFor="inlineRadio1" className="add-investment-account__label">Details</label>
        <div className="add-investment-account__line"></div>
      </div>

      <div className="add-investment-account__radios">
        <Radio
          id="inlineRadio2"
          inline
          name="inlineRadios"
          value={2}
          checked={activeTabIndex === 1 }
          checkedIconChildren="2"
          checkedIconClassName="add-investment-account__radio_checked"
          uncheckedIconChildren="2"
          uncheckedIconClassName="add-investment-account__radio_unchecked"
        />
        <Radio
          id="inlineRadio3-2"
          inline
          name="inlineRadios"
          value={3}
          checked={activeTabIndex === 2 || activeTabIndex === 3}
          className="add-investment-account__radio_second"
          checkedIconChildren="done"
          checkedIconClassName="add-investment-account__radio_checked material-icons"
          uncheckedIconChildren=""
          uncheckedIconClassName=""
        />
        <label htmlFor="inlineRadio2" className="add-investment-account__label">Address</label>
        <div className="add-investment-account__line"></div>
      </div>

      <div className="add-investment-account__radios">
        <Radio
          id="inlineRadio3"
          inline
          name="inlineRadios"
          value={3}
          checked={activeTabIndex === 2 }
          checkedIconChildren="3"
          checkedIconClassName="add-investment-account__radio_checked"
          uncheckedIconChildren="3"
          uncheckedIconClassName="add-investment-account__radio_unchecked"
        />
        <Radio
          id="inlineRadio3-2"
          inline
          name="inlineRadios"
          value={4}
          checked={activeTabIndex === 3 }
          className="add-investment-account__radio_second"
          checkedIconChildren="done"
          checkedIconClassName="add-investment-account__radio_checked material-icons"
          uncheckedIconChildren=""
          uncheckedIconClassName=""
        />
        <label htmlFor="inlineRadio3" className="add-investment-account__label">Refund Account</label>
        <div className="add-investment-account__line"></div>
      </div>

      <div className="add-investment-account__radios">
        <Radio
          id="inlineRadio3"
          inline
          name="inlineRadios"
          value={4}
          checked={activeTabIndex === 3 }
          checkedIconChildren="4"
          checkedIconClassName="add-investment-account__radio_checked"
          uncheckedIconChildren="4"
          uncheckedIconClassName="add-investment-account__radio_unchecked"
        />
        <label htmlFor="inlineRadio3" className="add-investment-account__label">Broker Account</label>
      </div>

    </div>
  }
}

export default AddAccountRadioToolbar;
