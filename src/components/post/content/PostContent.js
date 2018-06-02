import React from 'react';
import imgTest from 'assets/theme/img/profile-1.jpg';
import './PostContent.css';

const PostContent = (props) => {
   return<section className="ro-post-content">
      <p>{props.post.message}</p>
      {  props.post.image && 
         <a href={props.post.image} data-fancybox='' className='ro-preview-post-img-wrap'>
            <div style={{backgroundImage: `url(${props.post.image})`}} className='ro-preview-post-img'></div>
         </a>
      }
   </section>;
}

export default PostContent;