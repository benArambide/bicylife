import React, { Component } from 'react';
import PostService from 'services/PostService';
import Post from './Post';
import { Confirm } from 'semantic-ui-react'

class PostContainer extends Component{
   constructor(props){
      super(props);
      this.state = {};
      this.state.openDeleteConfirm = false;
      this.state.editMode = false;
      this.state.message = '';
      this.state.post = props.post;
      this.state.loadingUpdate = false;
   }

   handleEditPost = () => {
      this.setState({editMode: true});
   }

   handleDeletePost = () => {
      this.setState({openDeleteConfirm:true})
   }

   deletePost = () => {
      PostService.deletePost(this.props.post);
      this.props.onDeletePost( this.props.post );
      this.setState({openDeleteConfirm:false})
   } 

   updatePost = (e) => {
      this.setState({loadingUpdate:true});
      PostService.updatePost(this.state.post)
      .then( response => {
         this.setState({editMode:false,loadingUpdate:false});
      }, error => { console.error(error, 'No se pudo actualizar el post'); this.setState({editMode:false,loadingUpdate:false});  })
   }

   closeConfirm = () => {
      this.setState({openDeleteConfirm:false})
   }

   cancelEditMode = (e) => {
      e.preventDefault();
      this.setState({editMode:false});
   }

   handleChangePost = (e) => {
      console.log('cnaing?')
      this.setState({
         post :{
            ...this.state.post,
            [e.target.name] : e.target.value
         }
      });
   }

   render(){
      return(
         <React.Fragment>
            <Post
               handleDeletePost={this.handleDeletePost}
               handleEditPost={this.handleEditPost}
               cancelEdition={this.cancelEditMode}
               editMode={this.state.editMode}
               handleChange={this.handleChangePost}
               handleUpdatePost={this.updatePost}
               post={this.state.post}
               loadingUpdate={this.state.loadingUpdate}></Post>
            <Confirm open={this.state.openDeleteConfirm} onCancel={this.closeConfirm} onConfirm={this.deletePost} content='¿Seguro de desea eliminar el post?'/>
         </React.Fragment>
      );
   }
}

export default PostContainer;