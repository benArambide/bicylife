import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import './LoginForm.css'

const LoginForm = (props) => {
   const handleClick = (e) => {
      e.preventDefault();
      props.clickHandlerFormTo( props.to );
   }

   return <form className="ui form ro-form ro-form-login ro-fade-in ro-animated" 
      onSubmit={props.handleSubmit} autoComplete="off">
      <div className="field">
         <label>Correo Electrónico</label> 
         <input type="text" name="email" onChange={props.handleChange} autoComplete="off"/>
         { props.errors.email && props.errors.email.required && <small className="ro-text-danger" >Campo requerido</small>}
         { props.errors.email && props.errors.email.invalid && <small className="ro-text-danger" style={{marginLeft:'5px'}}>Campo inválido</small>}
      </div>
      <div className="field">
         <label>Contraseña</label> 
         <input type="password" name="password" onChange={props.handleChange} autoComplete="off"/>
         <input type="password" name="password" style={{display:'none'}} />
         { props.errors.password && props.errors.password.required && <small className="ro-text-danger">Campo requerido</small>}
      </div>
      <Button primary type="submit" loading={props.loading} disabled={props.loading}>Iniciar Sesión</Button>
      <p></p>
      <a href="" onClick={handleClick}>¿Aún no estas registrado? Regístrate</a>
      {( props.error ) &&
         <Message negative>
            <Message.Header>Ups!</Message.Header>
            <p>Usuario o Contraseña incorrectos</p>
         </Message> }
   </form>;
}

export default LoginForm;
