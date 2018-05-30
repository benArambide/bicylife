import React from 'react';
import './Login.css';
import LoginForm from 'components/pages/login/form/LoginForm';
import LoginHeader from 'components/pages/login/header/LoginHeader'

const LoginPage = (props) => {
   return <section className="ro-page ro-page-login ro-fade-in ro-animated">
      <div>
         <LoginHeader></LoginHeader>
         <div className="ui stackable grid ro-page-content">
            <div className="eight wide column ro-height-1-1">
               <div className="ro-flex ro-flex-bottom ro-height-1-1">
                  <div className="ro-page-login-message">
                     <h1 className="ro-text-white">Hola!</h1>
                     <p className="ro-text-white">Bienvenido a Bicylfe, la primera red social exclusiva para ciclistas.</p>
                     <p className="ro-text-white">Aquí podrás compartir tus experiencias, compartir las mejores rutas, hacer amigos para poder salir a pasear y mucho más.</p>
                  </div>
               </div>
            </div>
            <div  className="eight wide column ro-height-1-1">
               <div className="ro-flex ro-flex-center ro-flex-middle ro-height-1-1">
                  <LoginForm></LoginForm>
               </div>
            </div>
         </div>
      </div>
   </section>;
}

export default LoginPage;    