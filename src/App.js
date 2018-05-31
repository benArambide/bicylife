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
      const storageKey = 'BICYLIFE'
      AuthService.auth.onAuthStateChanged(user => {
         if (user) {
            window.localStorage.setItem(storageKey, JSON.stringify(user));
         } else {
            window.localStorage.removeItem(storageKey);
         }
      });
   }

   render() {
      return (
         <Router>
            <div>
               <Route exact path="/" render={ () => {
                  return AuthService.isAuthenticated() ? <HomeContainer /> : <Redirect to="/login"></Redirect> 
               }} />
               <Route path="/login" component={LoginPage} />
            </div>
         </Router>
      );
   }
}

export default App;
