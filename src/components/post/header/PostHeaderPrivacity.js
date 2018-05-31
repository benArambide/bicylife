import React from 'react';

const PostHeaderPrivacity = (props) => {
   if(props.privacity == 'public')
   {
      return<span style={{marginRight: '5px'}}><i className="ui icon rss"></i> Para Todos</span>;
   }
   else{
      return <span style={{marginRight: '5px'}}><i className="ui icon users"></i>Para Amigos</span>;
   }
}

export default PostHeaderPrivacity;