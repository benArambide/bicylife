import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import './PostFooter.css';

const PostFooter = (props) => {
   return<section className="ro-post-footer ro-mt-1">
      <Feed>
        <Feed.Event>
            <Feed.Content>
               <Feed.Meta>
                  <Feed.Like className="active">
                     <Icon name='like' />
                     4 Likes
                  </Feed.Like>
               </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
      </Feed>
   </section>;
}

export default PostFooter;