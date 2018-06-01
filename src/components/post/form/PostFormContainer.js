import React, { Component } from 'react';
import PostService from 'services/PostService';
import PostForm from './PostForm'
class PostFormContainer extends Component{
   
   constructor(props){
      super(props);
      this.state = {};

      this.postList = [];

      this.state.message = '';
      this.state.image = null;
      this.state.privacity = '';
   }
   

   handleChangePost = e => {
      this.setState({
         ...this.state,
         [e.target.name] : e.target.value
      });
   }


   handlePost = (e) => {
      e.preventDefault();
      if(!this.state.message) return;
      PostService.makePost({
         message: this.state.message,
         privacity: this.state.privacity
      })
      .then( response => {
         this.setState({message: ''});
      }, error => { console.log('No se puede postear')} )
   }

   getFile = (img) => {
      this.setState({image:img})
   }
   handleDeleteImage = (e) => {
      e.preventDefault();
      this.setState({image:null})
   }

   render(){
      return(<React.Fragment>
         <PostForm 
            message={this.state.message}
            privacity={this.state.privacity}
            handleGetFile={this.getFile}
            makePost={this.handlePost}
            handleChange={this.handleChangePost}
            uploadedImage={this.state.image}
            deleteImage={this.handleDeleteImage}></PostForm>
      </React.Fragment>);
   }
}

export default PostFormContainer;