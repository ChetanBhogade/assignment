import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAWGnSwGVyQ9K-MOS8R7m_BThQQ7XtapfE",
  authDomain: "assignment-firebase-7ce9c.firebaseapp.com",
  databaseURL: "https://assignment-firebase-7ce9c.firebaseio.com",
  projectId: "assignment-firebase-7ce9c",
  storageBucket: "assignment-firebase-7ce9c.appspot.com",
  messagingSenderId: "545396161092",
  appId: "1:545396161092:web:641dffc0e5a9e9fb3c1a11",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();