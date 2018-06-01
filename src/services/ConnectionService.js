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

class ConnectionService {
   static auth = firebase.auth();
   static db = firebase.database();
   static store = firebase.storage();
}

export default ConnectionService;