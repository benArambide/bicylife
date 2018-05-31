import React from 'react';
import { Feed } from 'semantic-ui-react';
import Moment from 'react-moment';
import profile from 'assets/theme/img/profile-1.jpg'
import PostHeaderPrivacity from './PostHeaderPrivacity';
import './PostHeader.css';

const PostHeader = (props) => {
   return<section className="ro-post-header ro-mb-1">
      <Feed>
        <Feed.Event>
          <Feed.Label image={profile} />
          <Feed.Content>
            <Feed.User>
              {props.post.owner_name}
            </Feed.User>
            <Feed.Date>
               <PostHeaderPrivacity privacity={props.post.privacity} />&nbsp;&nbsp;|&nbsp;&nbsp;
               <Moment fromNow>{props.post.created_at}</Moment>
            </Feed.Date>   
          </Feed.Content>
        </Feed.Event>
      </Feed>
   </section>;
}

export default PostHeader;