import React from 'react';
import './HomeFakeContent.css';
import { Feed, List } from 'semantic-ui-react'
import profile2 from 'assets/theme/img/profile-2.jpg';
import profile3 from 'assets/theme/img/profile-3.jpg';

const HomeFakeContent = (props) => {
   if(props.template == 1 ){
      return<section className="ro-fake-content">
         <h4>Opciones</h4>
         <List>
            <List.Item> 
               <List.Icon name='cogs' />
               <List.Content><a>Mi Configuración</a></List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='calendar' />
               <List.Content><a >Eventos</a></List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='comment outline' />
               <List.Content>
                  <a >Mensajes</a>
               </List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='area chart' />
               <List.Content>
                  <a >Market Place</a>
               </List.Content>
            </List.Item>
         </List>
      </section>;
   }
   else if(props.template == 2 ){
      return<section className="ro-fake-content">
         <h4>Historias</h4>
         <div>
            <Feed>
               <Feed.Event>
                  <Feed.Label>
                     <img src={profile2} />
                  </Feed.Label>
                  <Feed.Content>
                     <Feed.Summary>
                        <Feed.User>Alejandro</Feed.User> Agregó un amigo
                        <Feed.Date>Hace una hora</Feed.Date>
                     </Feed.Summary>
                  </Feed.Content>
               </Feed.Event>
               <Feed.Event>
                  <Feed.Label>
                     <img src={profile3} />
                  </Feed.Label>
                  <Feed.Content>
                     <Feed.Summary>
                        <Feed.User>Sandra</Feed.User> Agregó un amigo
                        <Feed.Date>Hace una hora</Feed.Date>
                     </Feed.Summary>
                  </Feed.Content>
               </Feed.Event>
            </Feed>
            <a>Ver más</a>
         </div>
      </section>;
   }
   return <div></div>;
}

export default HomeFakeContent;