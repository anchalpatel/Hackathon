import React, { useEffect, useState } from 'react'
import { getData } from '../utils/apiCall';
import { collection, doc, setDoc, query ,  where, getDocs, getDoc} from "firebase/firestore"; 
import {db} from '../utils/firebase';

function StudentData() {
  const [data,setData] = useState(null);
  useEffect(() => {
    const studentRef = collection(db, "studentregister");
    // console.log(studentRef)
    // const q = query(studentRef, where("email", "==", "shivam@pate.con"));
//    getDoc(q).then((querySnapshot)=>{
//     console.log(querySnapshot)
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
//    }

    // )
    
// });

const docRef = doc(db, "studentregister", "email==shivam@pate.con");

getDoc(docRef).then((docSnap)=> {
  console.log(docSnap)
}).catch((err)=> {
  console.log(err)
})
    
    
  }, []);

  return (
    <div>StudentData</div>
  )
}

export default StudentData