import ConnectionService from 'services/ConnectionService'
import moment from 'moment'
import AuthService from 'services/AuthService';

class PostService {
   static db = ConnectionService.db;

   static makePost = ( data ) => {
      let session = AuthService.getSession();
      data.privacity = data.privacity || 'public';
      const uui = PostService.db.ref('posts').push().key;
      const structure = 'posts/' + data.privacity + '/' + uui;
      const promise = PostService.db.ref(structure).set({
         message: data.message,
         image: null,
         like_count : 0,
         own_like : false,
         owner_name: session.email, // get full name,
         owner_uid : session.uid,
         privacity: data.privacity,
         created_at: moment().format()
      });
      return promise;
   }

   static getPosts = ( filter ) => {
      var ref = PostService.db.ref().child('/posts/' + filter.privacity)
      if(filter.privacity == 'friends')
         return ref.orderByChild('owner_uid').equalTo(filter.owner_uid).once('value');
      else
         return ref.once('value');
   }

   static deletePost = (post) => {
      var ref = PostService.db.ref().child('/posts/' + post.privacity)
      ref.child(post.uid).remove();
   }
} 

export default PostService;