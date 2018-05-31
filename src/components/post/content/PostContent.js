import React from 'react';
import imgTest from 'assets/theme/img/profile-1.jpg';
import './PostContent.css';

const PostContent = (props) => {
   return<section className="ro-post-content">
      <p>{props.post.message}</p>
      { props.post.image && <img src={props.post.image} />}
   </section>;
}

export default PostContent;