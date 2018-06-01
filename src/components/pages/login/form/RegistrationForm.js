import React from 'react';
import { Button, Message } from 'semantic-ui-react'
import './RegistrationForm.css'

const RegistrationForm = (props) => {
   const handleClick = (e) => {
      e.preventDefault();
      props.clickHandlerFormTo( props.to );
   }
   return <form className="ui form ro-form ro-form-login ro-fade-in ro-animated" 
      onSubmit={props.handleSubmit} autoComplete="off">
      <div className="field">
         <label>Nombres</label> 
         <input type="text" name="name" value={props.data.name} onChange={props.handleChange} autoComplete="off" />
         { props.errors.name && props.errors.name.required && <small className="ro-text-danger">Campo requerido</small>}
      </div>
      <div className="field">
         <label>Apellidos</label> 
         <input type="text" name="lastname" value={props.data.lastname} onChange={props.handleChange} autoComplete="off" />
         { props.errors.lastname && props.errors.lastname.required && <small className="ro-text-danger">Campo requerido</small>}
      </div>
      <div className="field">
         <label>Correo Electrónico</label> 
         <input type="text" name="email" value={props.data.email} onChange={props.handleChange} autoComplete="off"/>
         { props.errors.email && props.errors.email.required && <small className="ro-text-danger">Campo requerido</small>}
         { props.errors.email && props.errors.email.invalid && <small className="ro-text-danger" style={{marginLeft:'5px'}}>Campo inválido</small>}
      </div>
      <div className="field">
         <label>Elige una Contraseña</label> 
         <input type="password" name="password" value={props.data.password} onChange={props.handleChange} autoComplete="off"/>
         <input type="password" name="password" style={{display:'none'}} />
         { props.errors.password && props.errors.password.required && <small className="ro-text-danger">Campo requerido</small>}
         { props.errors.password && props.errors.password.size && <small className="ro-text-danger">Debe ser mas de 6 caracteres</small>}
      </div>
      <Button primary type="submit" loading={props.loading} disabled={props.loading}>Registrarme</Button>
      <p></p>
      <a href="" onClick={handleClick}>¿Ya tienes una cuenta? Inicia Sesión</a>
      
      {( props.error ) &&
         <Message negative>
            <Message.Header>Ups!</Message.Header>
            {(props.errorMessage != '') ? <p>{props.errorMessage}</p> : <p>No pudimos registrarte</p>}
         </Message> }
      {( props.success ) &&
         <Message positive>
            <Message.Header>Ok!</Message.Header>
            <p>Cuenta creada! Ahora ya puedes  <a href="" onClick={handleClick}>Iniciar Sesión</a> </p>
         </Message> }
   </form>;
}

export default RegistrationForm;