import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { Button, Icon } from 'semantic-ui-react';

class PickImageContainer extends Component{
   constructor(props){
      super(props);
   }

   pickImage = (e) => {
      e.preventDefault();
      let element = document.querySelector('#upload-image [type="file"]');
      let event = new Event('click');
      element.click();
   }  

   render(){
      return(
         <span id="upload-image">
            <Button icon onClick={this.pickImage}><Icon name='photo' /></Button>
            <div style={{display:'none'}}>
               <FileBase64
                  id="uploadImage"
                  multiple={ false }
                  onDone={ this.props.onDone } />
            </div>
         </span>
      );
   }
}

export default PickImageContainer;