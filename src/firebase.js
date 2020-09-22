import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx4MxHl3vBOB9dEwOvtupMTy9ub0Zp_qA",
  authDomain: "facebook-clone-c140c.firebaseapp.com",
  databaseURL: "https://facebook-clone-c140c.firebaseio.com",
  projectId: "facebook-clone-c140c",
  storageBucket: "facebook-clone-c140c.appspot.com",
  messagingSenderId: "340214712023",
  appId: "1:340214712023:web:8f57b27c8612d41a0bd292",
  measurementId: "G-CBV8SVJHV1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
