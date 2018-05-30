import React from 'react';
import PostHeader from 'components/post/header/PostHeader';
import PostContent from 'components/post/content/PostContent';
import PostFooter from 'components/post/footer/PostFooter';
import './Post.css';

const Post = (props) => {
   return<section className="ro-post ro-mb-1">
      <PostHeader></PostHeader>
      <PostContent></PostContent>
      <PostFooter></PostFooter>
   </section>;
}

export default Post;