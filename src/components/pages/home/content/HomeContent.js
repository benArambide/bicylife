import React from 'react';
import HomeFakeContent from './fake/HomeFakeContent'
import PostForm from 'components/post/form/PostForm'
import PostList from 'components/post/list/PostList'
import Sticky from 'react-sticky-el';
import './HomeContent.css';


const HomeContent = (props) => {
   return<div className="ui stackable grid ro-content" data-sticky-container>
      <div className="five wide column">
         <Sticky scrollElement=".ro-content" stickyStyle={{top:'100px'}}>
            <HomeFakeContent template="1"></HomeFakeContent>
         </Sticky>
      </div>
      <div className="six wide column" >
         <PostForm></PostForm>
         <PostList></PostList>
      </div>
      <div className="five wide column">
         <Sticky scrollElement=".ro-content" top="20px">
            <HomeFakeContent template="2"></HomeFakeContent>
         </Sticky>
      </div>
   </div>;
}

export default HomeContent;