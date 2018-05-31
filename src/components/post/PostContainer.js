import React, { Component } from 'react';
import PostService from 'services/PostService';
import Post from './Post';
import { Confirm } from 'semantic-ui-react'

class PostContainer extends Component{
   constructor(props){
      super(props);
      this.state = {};
      this.state.openDeleteConfirm = false;
   }

   handleEditPost = () => {

   }

   handleDeletePost = () => {
      this.setState({openDeleteConfirm:true})
   }

   deletePost = () => {
      PostService.deletePost(this.props.post);
      this.props.onDeletePost( this.props.post );
      this.setState({openDeleteConfirm:false})
   } 

   closeConfirm = () => {
      this.setState({openDeleteConfirm:false})
   }

   render(){
      return(
         <React.Fragment>
            <Post {...this.props}  
               handleDeletePost={this.handleDeletePost}
               handleEditPost={this.handleEditPost}></Post>
            <Confirm open={this.state.openDeleteConfirm} onCancel={this.closeConfirm} onConfirm={this.deletePost} content='¿Seguro de desea eliminar el post?'/>
         </React.Fragment>
      );
   }
}

export default PostContainer;