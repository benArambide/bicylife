import React from 'react';
import { Feed } from 'semantic-ui-react';
import profile from 'assets/theme/img/profile-1.jpg'
import './PostHeader.css';

const PostHeader = (props) => {
   return<section className="ro-post-header ro-mb-1">
      <Feed>
        <Feed.Event>
          <Feed.Label image={profile} />
          <Feed.Content>
            <Feed.User>
              Josue Arambide
            </Feed.User>
            <Feed.Date content='1 day ago' />
          </Feed.Content>
        </Feed.Event>
      </Feed>
   </section>;
}

export default PostHeader;