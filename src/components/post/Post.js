import React from 'react';
import PostHeader from 'components/post/header/PostHeader';
import PostContent from 'components/post/content/PostContent';
import PostFooter from 'components/post/footer/PostFooter';
import './Post.css';

const Post = (props) => {
   // <PostFooter post={props.post}></PostFooter>
   return<section className="ro-post ro-mb-1">
      <PostHeader post={props.post}></PostHeader>
      <PostContent post={props.post}></PostContent>
   </section>;
}

export default Post;