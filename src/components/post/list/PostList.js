import React from 'react';
import Post from 'components/post/Post';
import { Button } from 'semantic-ui-react';
import './PostList.css';

const PostList = (props) => {
   return<section className="ro-mt-1">
      <div className="ro-mb-1">
         <Button primary={props.activePublic} onClick={props.filterByPublic} 
            loading={props.loadingPublic}>Publicaciones Públicas</Button>
         <Button primary={props.activeFriends} onClick={props.filterByFriends}
            loading={props.loadingFriends}>Publicaciones para Amigos</Button>
      </div>
      {
         props.posts.map( (post) => {
            return  <Post key={post.uuid} post={post}></Post>
         })  
      }
   </section>;
}

export default PostList;