import React, { useEffect, useState } from 'react'
import { getData } from '../utils/apiCall';
import { collection, doc, setDoc, query ,  where} from "firebase/firestore"; 
import {db} from '../utils/firebase';

function StudentData() {
  const [data,setData] = useState(null);
  useEffect(() => {
    const studentRef = collection(db, "studentregister");
    const q = query(studentRef, where("email", "==", "shivam@pate.con"));
    const querySnapshot = getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
    
    
  }, []);

  return (
    <div>StudentData</div>
  )
}

export default StudentData