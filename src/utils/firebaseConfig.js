import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWAADL2NqMyQzscP0Y5aH2S62AwCSIC40",
    authDomain: "auth-crud-react.firebaseapp.com",
    
    //databaseURL: "https://auth-crud-react-default-rtdb.firebaseio.com",
    //projectId: "auth-crud-react",
    //storageBucket: "auth-crud-react.appspot.com",
    //messagingSenderId: "623669638508",
    //appId: "1:623669638508:web:787beadb0a92d387f22f49"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





export default firebase