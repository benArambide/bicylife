import React from 'react';
import Post from 'components/post/Post';
import './PostList.css';

const PostList = (props) => {
   return<section className="ro-mt-1">
      <Post></Post>
      <Post></Post>
      <Post></Post>
   </section>;
}

export default PostList;