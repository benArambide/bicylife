import React from 'react';
import './LoginHeader.css';
import logo from 'assets/theme/img/logo.png';

const LoginHeader = (props) => {
   return<section className="ro-header ro-header-login">
      <img src={logo} className="logo" />
   </section>;
}

export default LoginHeader;