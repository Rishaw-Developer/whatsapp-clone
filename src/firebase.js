import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBe355zbk_5ax-olXjzjF8eVneBanDAXkM",
    authDomain: "rishaws-whatsapp.firebaseapp.com",
    databaseURL: "https://rishaws-whatsapp.firebaseio.com",
    projectId: "rishaws-whatsapp",
    storageBucket: "rishaws-whatsapp.appspot.com",
    messagingSenderId: "54693986012",
    appId: "1:54693986012:web:4caf033cf6d71a8b60be19",
    measurementId: "G-2CBEG8WFT3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;