import React,{Component} from 'react';
import LoginForm from 'components/pages/login/form/LoginForm';
import RegistrationForm from 'components/pages/login/form/RegistrationForm';
import AuthService from 'services/AuthService';
import TranslateService from 'services/TranslateService';
import { withRouter } from 'react-router-dom'

class LoginContainer extends Component{
   constructor(props){
      super(props);
      this.state = {};
      this.state.currentForm = 'LOGIN';

      this.state.login = {};
      this.state.login.email = '';
      this.state.login.password = '';

      this.state.registration = {};
      this.state.registration.names = '';
      this.state.registration.lastname = '';
      this.state.registration.email = '';
      this.state.registration.password = '';

      this.state.loginErrors = {
         email : {required: false, invalid: false},
         password : {required: false, invalid: false}
      }
      this.state.registrationErrors = {
         name: {required: false, invalid: false},
         lastname: {required: false, invalid: false},
         email : {required: false, invalid: false},
         password : {required: false, invalid: false, size: false}
      }

      this.state.loadingRegistration = false;
      this.state.loadingLogin = false;
      this.state.loginError = false;
      this.state.registrationError = false;
      this.state.registrationErrorMessage = '';
      this.state.registrationSuccess = false;
   }

   handleTypeForm = ( type ) => {
      this.setState({currentForm: type});
   }
   
   handleLogin = e => {
      e.preventDefault();
      let valid = this.validateLogin();
      if( !valid ) return;

      this.setState({loadingLogin: true})
      AuthService.login(this.state.login)
      .then( response => {
         this.setState({loadingLogin: false})
         this.props.history.replace("/");
      }, error => {
         console.error('No login', error);
         this.setState({loadingLogin: false, loginError: true})
      })
   }
   
   handleRegistration = e => {
      e.preventDefault();
      let valid = this.validateRegistration();
      if( !valid ) return;

      this.setState({loadingRegistration: true})
      AuthService.registration(this.state.registration)
      .then( response => {
         AuthService.saveUser({
            ...this.state.registration,
            uid: response.user.uid
         })
         .then( response => {
            this.setState(
               {
                  loadingRegistration: false, registrationSuccess: true,
                  registration:
                  { 
                     names : '',
                     lastname : '',
                     email : '',
                     password : ''
                  }
               })
         }, error => { console.error('User not saved') })
      }, error => {
         console.log('error registration', error)
         this.setState({loadingRegistration: false, registrationError: true, registrationErrorMessage: TranslateService.translate(error.message) })
      })
   }

   handleChangeLogin = e => {
      this.setState({
         login: {
            ...this.state.login,
            [e.target.name] : e.target.value
         }
      });
   }

   handleChangeRegistration = e => {
      this.setState({
         registration: {
            ...this.state.registration,
            [e.target.name] : e.target.value
         }
       });
   }

   validateLogin = () => {
      let _loginError = {};
      _loginError.email = {};
      _loginError.password = {};

      if( !this.state.login.email ) _loginError.email.required = true;
      if( !this._validateEmail(this.state.login.email) ) _loginError.email.invalid = true;
      if( !this.state.login.password ) _loginError.password.required = true;
      this.setState({ loginErrors : {
         email:{
            required: _loginError.email.required,
            invalid: _loginError.email.invalid
         },
         password : {
            required : _loginError.password.required
         }
      }});

      return (
         JSON.stringify(_loginError.email) == JSON.stringify({}) &&
         JSON.stringify(_loginError.password) == JSON.stringify({}) ) ? true : false;
   }

   validateRegistration = () => {
      let _registrationError = {};
      _registrationError.name = {};
      _registrationError.lastname = {};
      _registrationError.email = {};
      _registrationError.password = {};

      if( !this.state.registration.email ) _registrationError.email.required = true;
      if( !this._validateEmail(this.state.registration.email) ) _registrationError.email.invalid = true;
      if( !this.state.registration.password ) _registrationError.password.required = true;
      if( this.state.registration.password.length < 6 ) _registrationError.password.size = true;
      if( !this.state.registration.name ) _registrationError.name.required = true;
      if( !this.state.registration.lastname ) _registrationError.lastname.required = true;

      this.setState({ registrationErrors : {
         email:{
            required: _registrationError.email.required,
            invalid: _registrationError.email.invalid
         },
         password : {
            required : _registrationError.password.required,
            size: _registrationError.password.size
         },
         name : {
            required : _registrationError.name.required
         },
         lastname : {
            required : _registrationError.lastname.required
         }
      }});
      return ( 
         JSON.stringify(_registrationError.name) === JSON.stringify({}) && 
         JSON.stringify(_registrationError.lastname)  === JSON.stringify({}) &&
         JSON.stringify(_registrationError.email) === JSON.stringify({}) &&
         JSON.stringify(_registrationError.password) === JSON.stringify({}) ) ? true : false;
   }

   _validateEmail( emailString ){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(emailString).toLowerCase());
   }

   render(){
      let currentForm = <div></div>;

      if(this.state.currentForm == 'LOGIN')
         currentForm = <LoginForm 
               clickHandlerFormTo={this.handleTypeForm} 
               to="REGISTRATION"
               handleSubmit={this.handleLogin}
               handleChange={this.handleChangeLogin}
               data={this.state.login}
               handleModel={this.state.login}
               errors={this.state.loginErrors}
               loading={this.state.loadingLogin}
               error={this.state.loginError}></LoginForm>;
      if(this.state.currentForm == 'REGISTRATION')
         currentForm = <RegistrationForm 
               clickHandlerFormTo={this.handleTypeForm}
               to="LOGIN"
               handleSubmit={this.handleRegistration}
               handleChange={this.handleChangeRegistration}
               data={this.state.registration}
               loading={this.state.loadingRegistration}
               errors={this.state.registrationErrors}
               error={this.state.registrationError}
               errorMessage={this.state.registrationErrorMessage}
               success={this.state.registrationSuccess}></RegistrationForm>;

      return<React.Fragment>
         {currentForm}
      </React.Fragment>
   }
}

export default withRouter(LoginContainer);   