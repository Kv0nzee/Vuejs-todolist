import { initializeApp } from "firebase/app"
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmyok50g4KCeWopcWBYUTSpd4tfMyNwS4",
  authDomain: "blog-system-cc938.firebaseapp.com",
  projectId: "blog-system-cc938",
  storageBucket: "blog-system-cc938.appspot.com",
  messagingSenderId: "971403279648",
  appId: "1:971403279648:web:41a1cb3015419f417e2b45",
  measurementId: "G-45HPDHSL90"
};
  //init firebase
  const firebaseApp = initializeApp(firebaseConfig)

// database setup
let db = getFirestore(firebaseApp);
export {db};