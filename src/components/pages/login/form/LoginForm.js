import React from 'react';
import { Button } from 'semantic-ui-react';
import './LoginForm.css'

const LoginForm = (props) => {
   const handleClick = (e) => {
      e.preventDefault();
      props.clickHandlerFormTo( props.to );
   }

   return <form className="ui form ro-form ro-form-login ro-fade-in ro-animated" 
      onSubmit={props.handleSubmit} autoComplete="false">
      <div className="field">
         <label>Correo Electrónico</label> 
         <input type="text" name="email" onChange={props.handleChange}/>
         { props.errors.email && props.errors.email.required && <small className="ro-text-danger" >Campo requerido</small>}
         { props.errors.email && props.errors.email.invalid && <small className="ro-text-danger" style={{marginLeft:'5px'}}>Campo inválido</small>}
      </div>
      <div className="field">
         <label>Contraseña</label> 
         <input type="password" name="password" onChange={props.handleChange} />
         <input type="password" name="password" style={{display:'none'}} />
         { props.errors.password && props.errors.password.required && <small className="ro-text-danger">Campo requerido</small>}
      </div>
      <button type="submit" className="ui primary button">Iniciar Sesión</button>
      <p></p>
      <a href="" onClick={handleClick}>¿Aún no estas registrado? Regístrate</a>
   </form>;
}

export default LoginForm;
