import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig={
    apiKey: "AIzaSyD1fJzThxuRRcXcqLLwpp1-Xi7x0WJqnng",
    authDomain: "studynotion-11b19-default-rtdb.firebaseio.com/",
    projectId: "studynotion-11b19",
   
}


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}