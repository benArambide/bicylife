import React, { Component } from 'react';
import 'assets/theme/scss/index.css';

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// roPages
import LoginPage from "components/pages/login/Login";
import HomePage from 'components/pages/home/Home';


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
