 import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';

 const firebaseConfig = {
   apiKey: "AIzaSyA-9OO8zDdlrxGkJo1UoORJtKkkUnxAWMI",
  authDomain: "clone-a1ec7.firebaseapp.com",
  projectId: "clone-a1ec7",
  storageBucket: "clone-a1ec7.appspot.com",
  messagingSenderId: "505794695945",
  appId: "1:505794695945:web:996f4003e0a828c78bb9d8",
  measurementId: "G-8P62E92GJF"
};
  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  const auth = firebase.auth();
 export { auth };
 
 