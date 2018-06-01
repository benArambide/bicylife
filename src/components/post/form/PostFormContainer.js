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
      this.state.loadingPost = false;
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

      this.setState({loadingPost:true});
      PostService.makePost({
         message: this.state.message,
         privacity: this.state.privacity,
         image : this.state.image
      })
      .then( response => {
         this.setState({image:null})
         this.setState({message: ''});
         this.setState({loadingPost:false});
      }, error => { console.log('No se puede postear'); this.setState({loadingPost:false});} )
   }

   getFile = (img) => {
      // validate image
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
            deleteImage={this.handleDeleteImage}
            loading={this.state.loadingPost}></PostForm>
      </React.Fragment>);
   }
}

export default PostFormContainer;