import ConnectionService from 'services/ConnectionService'
import moment from 'moment'
import AuthService from 'services/AuthService';

class PostService {
   static db = ConnectionService.db;
   static store = ConnectionService.store;

   static makePost = ( data ) => {
      let session = AuthService.getSession();
      data.privacity = data.privacity || 'public';
      const uui = PostService.db.ref('posts').push().key;
      const structure = 'posts/' + data.privacity + '/' + uui;

      /*
      using storage
      console.log('data post',data)
      if(data.image != null){
         PostService.saveImage(data.image)
         .then( response => {
            console.log(response)
            console.log('subiendo la image')
         }, error => { console.error(error) })
      }*/

      const promise = PostService.db.ref(structure).set({
         message: data.message,
         image: (data.image) ? data.image.base64 : null,
         like_count : 0,
         own_like : false,
         owner_name: session.email, // get full name,
         owner_uid : session.uid,
         privacity: data.privacity,
         created_at: moment().format()
      });
      return promise;
   }

   static updatePost = (data) => {
      const structure = 'posts/' + data.privacity + '/' + data.uid;
      const promise = PostService.db.ref(structure).set(data);
      return promise;
   }

   static getPosts = ( filter ) => {
      var ref = PostService.db.ref().child('/posts/' + filter.privacity)
      if(filter.privacity == 'friends')
         return ref.orderByChild('owner_uid').equalTo(filter.owner_uid).once('value');
      else
         return ref.once('value');
   }

   static saveImage = (img) => {
      let cleanString = img.base64.split( 'data:' + img.type + ';base64,');
      return PostService.store.ref().child('/posts/tet.png').putString(cleanString[1], 'base64')
   }

   static deletePost = (post) => {
      var ref = PostService.db.ref().child('/posts/' + post.privacity)
      ref.child(post.uid).remove();
   }

   static listenNewPosts = (filter,callback) => {
      var ref = PostService.db.ref().child('/posts/' + filter.privacity)
      if(filter.privacity == 'friends')
         return ref.orderByChild('owner_uid').equalTo(filter.owner_uid).on('value',(response) =>{
            callback(response);
         });
      else
         return ref.on('value',(response) =>{
            callback(response);
         });
   }
} 

export default PostService;