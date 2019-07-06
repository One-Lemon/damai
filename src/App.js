import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/views/home';
import Login from '@/views/login';
import Signup from '@/views/signup';
import Address from '@/views/address';
import Mine from '@/views/mine';
import Pdetails from '@/views/Pdetails';
import Plist from '@/views/Plist';
import Sdetails from '@/views/Sdetails';
import Slist from '@/views/Slist';
import Search from '@/views/search';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={ Login } path='/login'/>
          <Route component={ Signup } path='/signup'/>
          <Route component={ Home } path='/home'/>
          <Route component={ Address } path='/address'/>
          <Route component={ Mine } path='/mine'/>
          <Route component={ Search } path='/search'/>
          <Route component={ Plist } path='/Plist'/>
          <Route component={ Pdetails } path='/pdetails'/>
          <Route component={ Sdetails } path='/sdetails/:id'/>
          <Route component={ Slist } path='/slist'/>
          <Redirect to='/home'/>
        </Switch>
      </Router>
    )
  }
}
