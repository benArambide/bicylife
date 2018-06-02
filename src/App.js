import React, { Component } from 'react';
import 'assets/theme/scss/index.css';

// router
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// roPages
import LoginPage from "components/pages/login/Login";
import HomeContainer from 'components/pages/home/HomeContainer';

import AuthService from 'services/AuthService';

class App extends Component {

   componentDidMount() {
      
      AuthService.auth.onAuthStateChanged(user => {
         if (user) { AuthService.saveSessionUser(user) } 
         else { AuthService.removeSessionUser() }
      });
   }

   render() {
      return (
         <Router>
            <div>
               <Route exact path="/" render={ () => {
                  return AuthService.isAuthenticated() ? <HomeContainer /> : <Redirect to="/login"></Redirect> 
               }} />
               <Route exact path="/login" render={ () => {
                  return !AuthService.isAuthenticated() ? <LoginPage /> : <Redirect to="/"></Redirect> 
               }} />
               <Redirect from="*" to="/" />
            </div>
         </Router>
      );
   }
}

export default App;
