import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import injectProps from "../_utils/decorators/injectProps";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import FontIcon from "react-md/lib/FontIcons";
import ListItem from "react-md/lib/Lists/ListItem";
import MenuButton from "react-md/lib/Menus/MenuButton";
import Positions from "react-md/lib/Menus/Positions";
import Avatar from "react-md/lib/Avatars";
import Button from "react-md/lib/Buttons/Button";

import ProgressBlockingParentWindow from "./../_components/ProgressBlockingParentWindow";
import OffersContainer from "../offers/OffersContainer";
import MyBidsContainer from "../my-bids/MyBidsContainer";
import InvestmentAccountsContainer from "../investment-accounts/InvestmentAccountsContainer";

import { HashRouter as Router, Switch, Route, location } from 'react-router-dom';


class NavigationPanel extends Component {
    constructor(props) {
      super(props)

      this.state = { showProgressLoader: false }
    }

    getNavigationItems(pathname) {
        return [
            {
                className: "navigation__subheader dashboard-subheader",
                subheader: true,
                primaryText: 'Dashboard'
            },
            {
                component: Link,
                to: '/offers',
                active: '/offers' == pathname,
                primaryText: 'Offers',
                className: 'md-divider-border md-divider-border--bottom',
                leftIcon: <FontIcon>inbox</FontIcon>
            },
            {
                component: Link,
                to: '/my-bids',
                active: '/my-bids' == pathname,
                primaryText: 'My Bids',
                leftIcon: <FontIcon>attach_money</FontIcon>
            },
            {
                className: "navigation__subheader settings-subheader",
                subheader: true,
                primaryText: 'Account Settings'
            },
            {
                component: Link,
                to: '/investment-accounts',
                active: '/investment-accounts' == pathname,
                primaryText: 'Investment Accounts',
                leftIcon: <FontIcon>folder</FontIcon>
            }
        ]
    }


    onSignOutClicked({userLogout}) {

      this.setState({showProgressLoader: true});

      setTimeout(() => {
          this.setState({showProgressLoader: false});
          this.props.userLogout();
      }, 3000);

    }

    renderActions(userInfo) {

        const { showProgressLoader } = this.state;
        const inProgressBlockingWindow = showProgressLoader ? <ProgressBlockingParentWindow /> : null;
        if (typeof(userInfo.name) == 'string') {
          var avatar = userInfo.name.match(/[A-Z,a-z,А-Я,а-я]/);
        }

        return <MenuButton id="navigation__actions-btn"
                           icon
                           iconClassName="material-icons navigation__actions-btn__icon"
                           buttonChildren="person"
                           position={Positions.TOP_RIGHT}
                           listClassName="navigation__actions-list"
        >
            {inProgressBlockingWindow}
            <ListItem
                leftAvatar={<Avatar random>{avatar || 'O'}</Avatar>}
                primaryText={userInfo.name || ''}
                secondaryText={<span>{userInfo.email}</span>}
            />
            <Button raised
              secondary
              className="navigation__sign-out-btn navigation__sign-out-btn_white"
              label="Sign Out"
              onClick={::this.onSignOutClicked}
            />
            {/*A tricky fix for lists with single item... A bug of react-md...*/}
            <ListItem style={{display: "none"}} primaryText="hidden, to fix the react-md bug"/>
        </MenuButton>
    }

    @injectProps
    render({pathname, userInfo, location }) {

        const actions = this.renderActions(userInfo);
        const navigationItems = this.getNavigationItems(pathname);

        var navItems;

        if (pathname == '/offers') {
          navItems = <OffersContainer />;
        } else if (pathname == '/my-bids') {
          navItems = <MyBidsContainer />;
        } else if (pathname == '/investment-accounts') {
          navItems = <InvestmentAccountsContainer />;
        }

        return <NavigationDrawer
            contentClassName="navigation__content-section"
            drawerTitle="Navigation"
            drawerClassName="navigation__drawer"
            toolbarClassName="navigation__toolbar"
            toolbarTitle="Football Betting"
            toolbarTitleClassName="navigation__toolbar-title"
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
            desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
            navItems={navigationItems}
            toolbarActions={actions}
            >
              {navItems}
            </NavigationDrawer>
    }
}

export default NavigationPanel;
