import React from 'react';

import './LoginForm.css'

const LoginForm = (props) => {
   return <form className="ui form ro-form ro-form-login" autoComplete="false">
      <div className="field">
         <label>Usuario</label> 
         <input type="text" name="username" />
         <small className="ro-text-danger">Campo requerido</small>
      </div>
      <div className="field">
         <label>Contraseña</label> 
         <input type="password" name="password" />
         <small className="ro-text-danger">Campo requerido</small>
      </div>
      <button className="ui primary button">Iniciar Sesión</button>
      <p></p>
      <a href="">¿Aún no estas registrado? Regístrate</a>
   </form>;
}

export default LoginForm;
