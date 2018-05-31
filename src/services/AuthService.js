import * as firebase from 'firebase'

// Initialize Firebase
var config = {
   apiKey: "AIzaSyDJURPJF4BU1U1t0WroMsq9tL-w_wgVnNQ",
   authDomain: "bicylife-1f69b.firebaseapp.com",
   databaseURL: "https://bicylife-1f69b.firebaseio.com",
   projectId: "bicylife-1f69b",
   storageBucket: "bicylife-1f69b.appspot.com",
   messagingSenderId: "1010294028165"
 };
 firebase.initializeApp(config);

class AuthService {
   static auth = firebase.auth();
   static db = firebase.database();

   static registration = ( data ) => {
      const promise = AuthService.auth.createUserWithEmailAndPassword(data.email, data.password);
      return promise;
   }

   static login = (data) => {
      const promise = AuthService.auth.signInWithEmailAndPassword(data.email, data.password);
      return promise;
   }

   static saveUser = (data) => {
      console.log(data)
      const promise = AuthService.db.ref('users/' + data.uid).set({
         name: data.name,
         lastname: data.lastname,
         email: data.email,
         profile_picture : 'default.jpg'
      });
      return promise;
   }

   static isLoggedIn = () => {
      return new Promise((resolve, reject) => {
         AuthService.auth.onAuthStateChanged(function (user) {
            if (user) {
               resolve(user)
            } else {
               reject(console.log)
            }
         })
      })
   }

   static logOut = () => {
      const promise = AuthService.auth.signOut();
      return promise;
   }

   static isAuthenticated = () => {
      return !!localStorage.getItem('BICYLIFE');
   };
}

export default AuthService;