import React, { Component } from 'react';
import HomeContent from './HomeContent';
import { Divider } from 'semantic-ui-react';

class HomeContentContainer extends Component {
   state = {};
   render() {
      return (
         <div>
            <HomeContent></HomeContent>
         </div>
      );
   }
 }

export default HomeContentContainer;