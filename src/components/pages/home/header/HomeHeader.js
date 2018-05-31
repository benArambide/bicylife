import React from 'react';
import { Icon } from 'semantic-ui-react'
import './HomeHeader.css';
import logo from 'assets/theme/img/logo.png';

const HomeHeader = (props) => {
   return<section className="ro-header ro-header-dashboard">
      <img src={logo} className="logo" />
      <ul className="ro-header-menu">
         <li>
            <a href="#">
               <b>Inicio</b>
            </a>
         </li>
         <li>
            <a href="" onClick={props.logout}>
               Salir
               &nbsp;&nbsp;
               <Icon name="sign out"></Icon>
            </a>
         </li>
      </ul>
   </section>;
}

export default HomeHeader;