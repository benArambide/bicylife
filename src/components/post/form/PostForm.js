import React from 'react';
import './PostForm.css';
import { Button, Icon,Dropdown } from 'semantic-ui-react';

const PostForm = (props) => {
   return<section>
      <form className="ui form ro-form ro-form-post" autoComplete="false">
         <textarea placeholder="¿Qué estas pensando?" name="message" rows="3" onChange={props.handleChange} value={props.message}></textarea>
         <div className="ro-mt-1 ro-text-right">
            <Button icon><Icon name='photo' /></Button>
            <select className="ui fluid dropdown" name="privacity" style={{width:'100px',display:'inline-block',marginRight:'5px'}} value={props.privacity} onChange={props.handleChange}>
               <option value="public">Público</option>
               <option value="friends">Amigos</option>
            </select>
            <Button primary onClick={props.makePost}>Publicar</Button>
         </div>
      </form>
   </section>;
}

export default PostForm;