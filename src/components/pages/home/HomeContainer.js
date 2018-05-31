import React, { Component } from 'react';
import AuthService from 'services/AuthService';
import HomePage from './Home';
import { withRouter } from 'react-router-dom'

class HomeContainer extends Component{

   constructor(props){
      super(props);
      this.state = {};  
   }

   handlerLogOut = (e) => {
      e.preventDefault();
      AuthService.logOut();
      window.localStorage.removeItem('BICYLIFE');
      this.props.history.push("/login");
   }


   render(){
      return <HomePage logout={this.handlerLogOut} />
   }
}

export default withRouter(HomeContainer);