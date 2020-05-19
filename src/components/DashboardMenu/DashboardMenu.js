import React from 'react';
import logo from '../../logo-text-white.svg';
import profile from '../../profile.svg'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import {reduxConnector} from '../../redux'
import "./DashboardMenu.css"

const list = [
  {text: "Dashboard", icon:"home"}, 
  {text: "Notifications", icon:"notifications"}, 
  {text: "Campaigns", icon:"poll"}, 
  {text: "Community", icon:"supervisor_account"},
  {text: "Support", icon:"contact_support"}
]

const DashboardMenu = reduxConnector((props) => {

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    props.toggleDashboardMenu(open)
  };

  return (
  <div className={(props.window.width > 900) ? "pageMenuDesktop" : ""}>
    <SwipeableDrawer
      anchor="left"
      open={(props.window.width > 900) || props.dashboardMenuOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div className="pageMenu"
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}>

        <img src={logo} className="App-logo" alt="logo" />
        <div class="menu-profile">
          <img className="menu-profile-picture" src={props.user.pic} alt="logo" />
          <h2  className="menu-profile-name"> {props.user.name}</h2> 
        </div>

        <List
          component="nav"
          style={{display: "flex", flexDirection: "column", width: "100%", marginBottom: "2.2rem"}}
        >
          {list.map(item => (
            <ListItem button style={{paddingLeft: "4rem"}} key={item.text}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}      

        </List>

        <div style={{position: "absolute", bottom: 0, left: 0, right: 0}}>
          <ListItem button style={{paddingLeft: "4rem"}} >
              <ListItemIcon>
                <Icon>settings</Icon>
              </ListItemIcon>
              <ListItemText primary={"My Account"} />
            </ListItem>
        </div>
      </div>
    </SwipeableDrawer>
</div>
  )
});

export default DashboardMenu