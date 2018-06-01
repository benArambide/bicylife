import React from 'react';
import PostContainer from 'components/post/PostContainer';

import './PostList.css';

const PostList = (props) => {
   return<section className="ro-mt-1">
      {
         props.posts.map( (post) => {
            return  <PostContainer 
               key={post.uid} 
               post={post} 
               onDeletePost={props.onDeletePost}>
            </PostContainer>
         })  
      }
   </section>;
}

export default PostList;