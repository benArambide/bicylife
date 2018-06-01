import React, { Component } from 'react';
import './PreviewImageContainer.css';

class PreviewImageContainer extends Component{
   constructor(props){
      super(props);
   }

   render(){
      if(this.props.img){
         return(
            <div className="ro-preview-img-wrap ro-fade-in ro-animated">
               <div className="ro-preview-img-item">
                  <img src={this.props.img.base64} />
                  <a href="" className="close" onClick={this.props.deleteImage}><i className="ui icon remove circle"></i></a> 
               </div>
            </div>
         );
      }
      else
         return(<span></span>);
   }
}

export default PreviewImageContainer;