import React, { Component } from 'react';
import PostService from 'services/PostService';
import AuthService from 'services/AuthService';
import * as _ from 'lodash';
import PostList from './PostList'
import './PostListContainer.css'
import { Button, Tab } from 'semantic-ui-react';
class PostFormContainer extends Component{
   
   constructor(props){
      super(props);
      this.state = {};
      this.state.postListPublic = [];
      this.state.postListFriends = [];
      this.state.loadingPublic = false;
      this.state.loadingFriends = false;
   }

   componentDidMount(){
      this.filterBy('public');
      this.filterBy('friends');

      //listeners
      PostService.listenNewPosts({
         owner_uid: AuthService.getSession().uid,
         privacity: 'public'
      }, (response) => { this._processPosts(response, 'public'); } );
      PostService.listenNewPosts({
         owner_uid: AuthService.getSession().uid,
         privacity: 'friends'
      }, (response) => { this._processPosts(response, 'friends'); } );
   }

   filterBy = ( type = 'public') => {
      this._filterPosts({
         privacity: type,
         owner_uid: AuthService.getSession().uid
      });
   }

   _filterPosts = ( filter = {} ) => {
      this.setState({loadingPublic:true,loadingFriends:true})
      PostService.getPosts( filter )
      .then( response => {
         this._processPosts(response, filter.privacity);
      }, error => { console.error(error); this.setState({loadingPublic:false, loadingFriends: false}); })
   }

   _processPosts = ( response, type = 'public' ) => {
      let posts = response.val();
      let postsList = [];
      for (var key in posts) {
         if (posts.hasOwnProperty(key)) {
            posts[key].uid = key;
            posts[key].owner_post = posts[key].owner_uid == AuthService.getSession().uid;
            postsList.push(posts[key]);
         }
      }
      postsList.reverse();
      if(type == 'public')
         this.setState({postListPublic:postsList,loadingPublic:false});
      else
         this.setState({postListFriends:postsList,loadingFriends: false});
   }

   handleRemoveFromList = ( post ) => {
      let list = this.state.postList;
      _.remove(list, ele => ele.uid == post.uid )
      this.setState({postList:list});
   }

   render(){
      return(<React.Fragment>
         <div className="ro-mt-1 ro-post-list-container">
            <Tab menu={{ attached: false }} panes={[
               { menuItem: 'Publicaciones Públicas', render: () =>
                  <Tab.Pane loading={this.state.loadingPublic}>
                     <PostList 
                        posts={this.state.postListPublic}
                        onDeletePost={this.handleRemoveFromList}
                        ></PostList>
                  </Tab.Pane> 
               },
               { menuItem: 'Publicaciones De Amigos', render: () =>
                  <Tab.Pane loading={this.state.loadingFriends}>
                     <PostList 
                        posts={this.state.postListFriends}
                        onDeletePost={this.handleRemoveFromList}
                        ></PostList>
                  </Tab.Pane> 
               }
            ]} />
         </div>
      </React.Fragment>);
   }
}

export default PostFormContainer;