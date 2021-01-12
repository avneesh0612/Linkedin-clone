import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsyIcYaZdIKpJlStl_t0wBXDKSxEoJYt4",
  authDomain: "linkedin-clone-20fba.firebaseapp.com",
  projectId: "linkedin-clone-20fba",
  storageBucket: "linkedin-clone-20fba.appspot.com",
  messagingSenderId: "260077094804",
  appId: "1:260077094804:web:566e02eb28e7c781723181",
  measurementId: "G-K34GS8XXBP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
