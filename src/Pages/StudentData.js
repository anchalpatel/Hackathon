import React, { useEffect, useState } from 'react'
import { getData } from '../utils/apiCall';

function StudentData() {
  const [data,setData] = useState(null);
  useEffect(() => {
    getData("https://studynotion-11b19-default-rtdb.firebaseio.com/studentregister.json/"+localStorage.getItem("userid")).then(res=>{
      console.log(res);
      setData(res)

    }).catch(err=>{
      console.log(err)
    })
    
    
  }, []);

  return (
    <div>StudentData</div>
  )
}

export default StudentData