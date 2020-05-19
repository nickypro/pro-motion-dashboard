import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import DashboardMenu from './components/DashboardMenu'
import DashboardTopBar from './components/DashboardTopBar'
import DashboardHome from './components/DashboardHome'


const App = (props) => {
  return (
    <Router>
      <div className="App">
        <DashboardMenu />
        
        <div  className="pageFocus" >
          <DashboardTopBar page="Home" />

          <Switch>
            <Route path="/dashboard/:slug" component={DashboardHome} />
            <Route path="/dashboard/" component={DashboardHome} />
          </Switch>    
        </div>
      </div>
    </Router>
  );
};

export default App;
