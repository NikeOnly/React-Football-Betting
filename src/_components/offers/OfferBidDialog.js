import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../../_utils/decorators/injectProps";
import {createOfferShape} from "../../_shapes";
import Autocomplete from 'react-md/lib/Autocompletes';
import Button from "react-md/lib/Buttons/Button";
import Dialog from "react-md/lib/Dialogs";
import TextField from 'react-md/lib/TextFields';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Divider from 'react-md/lib/Dividers';


class OfferBidDialog extends Component {
    static propTypes = {
        offer: createOfferShape().isRequired,
        hidden: PropTypes.bool,

        onSubmitBtnClicked: PropTypes.func,
        onCancelBtnClicked: PropTypes.func
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
          firstName: "",
          firstNameError: null,
          middleName: "",
          surname: "",
          surnameError: null,
          address:"",
          addressError: null,
          date: null,
          dateError: null
      }
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.offer != this.props.offer) {
          this.setState(this.getDefaultState());
      }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.hidden != nextProps.hidden || this.state != nextState;
  }

  onSubmitBtnClicked() {
    const {firstName, middleName, surname, address, date} = this.state;
    this.props.onSubmitBtnClicked(this.props.offer, {firstName, middleName, surname, address, date});
  }

  onCancelBtnClicked() {
    this.props.onCancelBtnClicked(this.props.offer);
  }

  @injectProps
  render({offer, hidden, onSubmitBtnClicked, onCancelBtnClicked, ...restProps}) {
    const today = new Date();
    const maxDate = new Date(new Date().setYear(today.getFullYear() - 18));

    if (hidden) {
      return null;
    }

    return <Dialog
        id="offers-popup"
        visible={true}
        title="Account Verification"
        modal="false"
        focusOnMount={false}
      >
        <div className="verification-text">
          <h1>Your account needs to be verified</h1>
          <h4>Before you can submit a bid for an offer, we need to verify your account. Please enter your details below and submit the form for verification.</h4>
        </div>
        <div className="md-grid">
          <TextField
            id="first-name"
            label="First Name"
            size={10}
            required
            className="md-cell md-cell--bottom"
            fullWidth={false}
          />
          <TextField
            id="middle-name"
            placeholder="Middle Name"
            size={10}
            className="md-cell md-cell--bottom"
            fullWidth={false}
          />
          <TextField
            id="surname"
            label="Surname"
            size={10}
            required
            className="md-cell md-cell--bottom"
            fullWidth={false}
          />
          <Autocomplete
            id="address"
            label="Address"
            className="md-cell md-cell--bottom"
            listClassName="verification-addresses-autocomplete"
            required
            helpText="Start typing to see the list of addresses, then select one from the list"
            data={this.props.accountVerificationAdresses}
            filter={Autocomplete.caseInsensitiveFilter}
          />
          <DatePicker
            id="date-of-birdth"
            label="Date of birth"
            helpText="Please use the format DD/MM/YYYY"
            required
            inline
            maxDate={maxDate}
            pickerClassName="verification-date-picker"
            className="md-cell md-cell--bottom"
          />
        </div>
        <Divider />
        <div className="account-verification__btns">
          <Button flat
            className="verification-cancel-btn"
            label="Cancel"
            onClick={::this.onCancelBtnClicked}
          />
          <Button raised secondary
            className=""
            label="Submit"
            onClick={::this.onSubmitBtnClicked}
          />
        </div>
      </Dialog>
  }
}

export default OfferBidDialog;
