import React, { Component } from 'react';
import PostService from 'services/PostService';
import AuthService from 'services/AuthService';

import PostList from './PostList'
class PostFormContainer extends Component{
   
   constructor(props){
      super(props);
      this.state = {};
      this.state.postList = [];

      this.state.activePublic = true;
      this.state.activeFriends = false;
      this.state.loadingPublic = false;
      this.state.loadingFriends = false;
   }

   componentDidMount(){
      this.filterByPublic();
   }

   filterByFriends = () => {
      let session = AuthService.getSession();
      this.setState({activePublic:false,activeFriends:true})
      this._filterPosts({
         privacity: 'friends',
         owner_uid: session.uid
      });
   }

   filterByPublic = () => {
      this.setState({activePublic:true,activeFriends:false})
      this._filterPosts({
         privacity: 'public'
      });
   }

   _filterPosts = ( filter = {} ) => {
      let session = AuthService.getSession();
      if(this.state.activePublic){ this.setState({loadingPublic:true}) }
      if(this.state.activeFriends){ this.setState({loadingFriends:true}) }

      PostService.getPosts( filter )
      .then( response => {
         let posts = response.val();
         let postsList = [];
         for (var key in posts) {
            if (posts.hasOwnProperty(key)) {
               posts[key].uid = key;
               posts[key].owner_post = posts[key].owner_uid == session.uid;
               postsList.push(posts[key]);
            }
         }
         postsList.reverse();
         this.setState({postList:postsList,loadingPublic:false, loadingFriends: false});
      }, error => { console.error(error); this.setState({loadingPublic:false, loadingFriends: false}); })
   }

   render(){
      return(<React.Fragment>
         <PostList 
            posts={this.state.postList}
            activePublic={this.state.activePublic}
            activeFriends={this.state.activeFriends}
            loadingPublic={this.state.loadingPublic}
            loadingFriends={this.state.loadingFriends}
            filterByPublic={this.filterByPublic}
            filterByFriends={this.filterByFriends}
            ></PostList>
      </React.Fragment>);
   }
}

export default PostFormContainer;