import React from 'react';
import './PostFormEdition.css';
import { Button, Icon,Dropdown } from 'semantic-ui-react';

const PostFormEdition = (props) => {
   return<section>
      <div className="ui mini form ro-form ro-form-post" autoComplete="false">
         <textarea name="message" rows="3" onChange={props.handleChange} value={props.post.message}></textarea>
         <div className="ro-mt-1 ro-text-right">
            <Button onClick={props.cancelEdition} size='mini'>Cancelar</Button>
            <Button primary 
               onClick={props.handleUpdatePost} size='mini' 
               loading={props.loadingUpdate}
               disabled={props.loadingUpdate}>Guardar</Button>
         </div>
      </div>
   </section>;
}

export default PostFormEdition;