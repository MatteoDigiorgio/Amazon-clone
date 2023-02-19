import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm9Okw7jpgUWhDE9ttgbSGrKiqG877UuM",
  authDomain: "clone-digiorgio.firebaseapp.com",
  projectId: "clone-digiorgio",
  storageBucket: "clone-digiorgio.appspot.com",
  messagingSenderId: "432927906783",
  appId: "1:432927906783:web:384aa41f365ac624d7426a",
  measurementId: "G-D4N0HFC5EB",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
