import React,{Component} from 'react';
import LoginForm from 'components/pages/login/form/LoginForm';
import RegistrationForm from 'components/pages/login/form/RegistrationForm';
class LoginContainer extends Component{
   constructor(props){
      super(props);
      this.state = {};
      this.state.currentForm = 'REGISTRATION';

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
         password : {required: false, invalid: false}
      }

      this.state.loadingRegistration = false;
   }

   handleTypeForm = ( type ) => {
      this.setState({currentForm: type});
   }
   
   handleLogin = e => {
      e.preventDefault();
      this.validateLogin();
   }
   
   handleRegistration = e => {
      e.preventDefault();
      let isValidate = this.validateRegistration();

      this.setState({loadingRegistration: true})
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

      return (_loginError.email == {} || _loginError.password == {} ) ? true : false;
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
      if( !this.state.registration.name ) _registrationError.name.required = true;
      if( !this.state.registration.lastname ) _registrationError.lastname.required = true;

      this.setState({ registrationErrors : {
         email:{
            required: _registrationError.email.required,
            invalid: _registrationError.email.invalid
         },
         password : {
            required : _registrationError.password.required
         },
         name : {
            required : _registrationError.name.required
         },
         lastname : {
            required : _registrationError.lastname.required
         }
      }});
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
               handleModel={this.state.login}
               errors={this.state.loginErrors}></LoginForm>;
      if(this.state.currentForm == 'REGISTRATION')
         currentForm = <RegistrationForm 
               clickHandlerFormTo={this.handleTypeForm}
               to="LOGIN"
               handleSubmit={this.handleRegistration}
               handleChange={this.handleChangeRegistration}
               loading={this.state.loadingRegistration}
               errors={this.state.registrationErrors}></RegistrationForm>;

      return<React.Fragment>
         {currentForm}
      </React.Fragment>
   }
}

export default LoginContainer;   