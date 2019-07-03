import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/views/home';
import Login from '@/views/login';
import Signup from '@/views/signup';
import Address from '@/views/signup';
import Mine from '@/views/mine';
import Pdetails from '@/views/Pdetails';
import Plist from '@/views/Plist';
import Sdetails from '@/views/Sdetails';
import Slist from '@/views/Slist';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={ Login } path='/login'/>
          <Route component={ Signup } path='/signup'/>
          <Route component={ Home } path='/home'/>
          <Route component={ Address } path='/Address'/>
          <Route component={ Mine } path='/mine'/>
          <Route component={ Plist } path='/Plist'/>
          <Route component={ Pdetails } path='/Pdetails'/>
          <Route component={ Sdetails } path='/Sdetails'/>
          <Route component={ Slist } path='/Slist'/>
          <Redirect to='/home'/>
        </Switch>
      </Router>
    )
  }
}
