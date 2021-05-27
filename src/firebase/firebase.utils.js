import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnKNRTWITm5bGGUuEAJnAaRCNE2uaXKLY",
  authDomain: "shopping-db-b7b20.firebaseapp.com",
  projectId: "shopping-db-b7b20",
  storageBucket: "shopping-db-b7b20.appspot.com",
  messagingSenderId: "38403838045",
  appId: "1:38403838045:web:ad4cd819ebf60af301bdb4",
  measurementId: "G-F44WMKCQ9F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
