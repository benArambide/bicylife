import React, { Component } from 'react';
import PostService from 'services/PostService';
import PostForm from './PostForm'
class PostFormContainer extends Component{
   
   constructor(props){
      super(props);
      this.state = {};

      this.postList = [];

      this.state.message = '';
      this.state.image = '';
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

   render(){
      return(<React.Fragment>
         <PostForm 
            message={this.state.message}
            privacity={this.state.privacity}
            makePost={this.handlePost} handleChange={this.handleChangePost}></PostForm>
      </React.Fragment>);
   }
}

export default PostFormContainer;