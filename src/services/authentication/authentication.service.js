import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
