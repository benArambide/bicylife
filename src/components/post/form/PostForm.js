import React from 'react';
import './PostForm.css';
import { Button, Icon,Dropdown } from 'semantic-ui-react';

const PostForm = (props) => {
   return<section>
      <form className="ui form ro-form ro-form-post" autoComplete="false">
         <textarea placeholder="¿Qué estas pensando?" rows="3"></textarea>
         <div className="ro-mt-1 ro-text-right">
            <Dropdown text='Público' icon='triangle down' floating labeled button className='icon' primary="true">
               <Dropdown.Menu>
                  <Dropdown.Menu scrolling>
                     <Dropdown.Item>
                        Público
                     </Dropdown.Item>
                     <Dropdown.Item>
                        Amigos
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown.Menu>
            </Dropdown>
            <Button icon><Icon name='photo' /></Button>
            <Button primary>Publicar</Button>
         </div>
      </form>
   </section>;
}

export default PostForm;