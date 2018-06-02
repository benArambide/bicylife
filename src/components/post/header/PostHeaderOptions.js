import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const PostHeaderOptions = (props) => {
   return<Dropdown icon='ellipsis horizontal' style={{position: 'absolute',top: '0',right: '5px'}} direction="left">
      <Dropdown.Menu>
         <Dropdown.Item text='Editar' onClick={props.handlerEdit}/>
         <Dropdown.Item text='Eliminar' onClick={props.handlerDelete} />
      </Dropdown.Menu>
   </Dropdown>;
}

export default PostHeaderOptions;