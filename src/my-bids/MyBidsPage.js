import React, {Component} from "react";
import PropTypes from 'prop-types';
import injectProps from "../_utils/decorators/injectProps";
import ValidationUtils from "../_utils/ValidationUtils";
import VanillaUtils from "../_utils/VanillaUtils";

import Dialog from "react-md/lib/Dialogs";
import Button from "react-md/lib/Buttons/Button";
import Tabs from "react-md/lib/Tabs/Tabs";
import Tab from "react-md/lib/Tabs/Tab";
import TabsContainer from "react-md/lib/Tabs/TabsContainer";
import Paper from 'react-md/lib/Papers';

class MyBidsPage extends Component {
  static propTypes = {

      activeTabIndex: PropTypes.string,

      handleTabChange: PropTypes.func,
      onShowTheOffers: PropTypes.func,

      // Redux Actions
      userInfo: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = { activeTabIndex: 0 };
  }

  handleTabChange(activeTabIndex) {
    this.setState({ activeTabIndex });
  }

  onShowTheOffers() {

  }

  @injectProps
  render({}) {
    const { activeTabIndex } = this.state;

    return <div>
        <h3 className="bids-header">My bids</h3>
        <TabsContainer
          onTabChange={::this.handleTabChange}
          activeTabIndex={activeTabIndex}
          colored
        >
          <Tabs tabId="tab">
            <Tab label="Submitted">
              <div className="tab__wrapper">
                <Paper
                  zDepth={1}
                  >
                    <h3 className="tabs__header">You don't have any submitted bids, submit your bids by going to our offers page and finding the offer you are interested in</h3>
                    <Button raised secondary
                      className="tabs__show-offers-btn"
                      label="Show me the offers"
                      onClick={::this.onShowTheOffers}
                    />
                  </Paper>
              </div>
            </Tab>
            <Tab label="Fulfilled" className="tab">
              <div className="tab__wrapper">
                <Paper
                  zDepth={1}
                  >
                    <h3 className="tabs__header">Hello, Fulfilled!</h3>
                  </Paper>
              </div>
            </Tab>
            <Tab label="Rejected" className="tab">
              <div className="tab__wrapper">
                <Paper
                  zDepth={1}
                  >
                    <h3 className="tabs__header">Hello, Rejected!</h3>
                  </Paper>
              </div>
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
  }
}



export default MyBidsPage;
