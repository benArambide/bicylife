import React from 'react';
import PostHeader from 'components/post/header/PostHeader';
import PostContent from 'components/post/content/PostContent';
import PostFooter from 'components/post/footer/PostFooter';
import PostFormEdition from 'components/post/form/PostFormEdition'
import './Post.css';

const Post = (props) => {
   // <PostFooter post={props.post}></PostFooter>
   return<section className="ro-post ro-mb-1">
      <PostHeader post={props.post} 
         handleDeletePost={props.handleDeletePost}
         handleEditPost={props.handleEditPost}></PostHeader>
      { !props.editMode && <PostContent post={props.post}></PostContent> }
      { props.editMode && <PostFormEdition 
         post={props.post} 
         handleChange={props.handleChange} 
         cancelEdition={props.cancelEdition}
         handleUpdatePost={props.handleUpdatePost}
         loadingUpdate={props.loadingUpdate}></PostFormEdition> }
   </section>;
}

export default Post;