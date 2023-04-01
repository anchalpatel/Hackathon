import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
const firebaseConfig={
    apiKey: "AIzaSyD1fJzThxuRRcXcqLLwpp1-Xi7x0WJqnng",
    authDomain: "studynotion-11b19.firebaseapp.com",
    databaseURL: "https://studynotion-11b19-default-rtdb.firebaseio.com",
    projectId: "studynotion-11b19",
    storageBucket: "studynotion-11b19.appspot.com",
    messagingSenderId: "861814679315",
    appId: "1:861814679315:web:beb0c58f8ebecff5f79ce6"
  };


const app = initializeApp(firebaseConfig);
console.log(app)
const auth = getAuth(app);
console.log(auth)
const db = getFirestore(app);
console.log(db);

export {auth, db}