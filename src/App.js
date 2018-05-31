import React, { Component } from 'react';
import 'assets/theme/scss/index.css';

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// roPages
import LoginPage from "components/pages/login/Login";
import HomePage from 'components/pages/home/Home';

import * as firebase from 'firebase'

// Initialize Firebase
var config = {
   apiKey: "AIzaSyDJURPJF4BU1U1t0WroMsq9tL-w_wgVnNQ",
   authDomain: "bicylife-1f69b.firebaseapp.com",
   databaseURL: "https://bicylife-1f69b.firebaseio.com",
   projectId: "bicylife-1f69b",
   storageBucket: "bicylife-1f69b.appspot.com",
   messagingSenderId: "1010294028165"
 };
 firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div>
         <Router>
            <div>
               <Route exact path="/" component={HomePage} />
               <Route path="/login" component={LoginPage} />
            </div>
         </Router>
      </div>
    );
  }
}

export default App;
