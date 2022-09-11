import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAQUExOMQmIfP7ygDKNa8z0ZOsTYyoLLsY",
  authDomain: "todo-list-b2e6c.firebaseapp.com",
  databaseURL: "https://todo-list-b2e6c-default-rtdb.firebaseio.com",
  projectId: "todo-list-b2e6c",
  storageBucket: "todo-list-b2e6c.appspot.com",
  messagingSenderId: "855958140715",
  appId: "1:855958140715:web:42e67615b5188df7c3b76e"
});

export { firebaseConfig as firebase };