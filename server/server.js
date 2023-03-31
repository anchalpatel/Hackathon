// import express from 'express';
// import cors from 'cors';
// import axios from 'axios';
const express=require('express');
const cors=require('cors');


const app=express();
app.use(cors());
app.use(express.json());

var mysql = require('mysql');

var con = mysql.createConnection({
  port:"3306",
  host: "localhost",
  user: "root",
  password: "Anchal@2025",
  database:"hostel"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
 const selectTable = () =>{
  let sql = "INSERT INTO signup (firstname, lastname, email, confirmpassword) Values ('Anchal', 'abcf', 'bdfbd', 'abdhv')";
  con.query(sql, (error, result)=>{
    if(error) throw error;
  

  })
 }
 selectTable();
// const createConnectiontable=()=>{
//     sql=`create table abcd (recid integer,name varchar(50))`
    
//     con.query(sql,(error,result)=>{
//         if(error) throw error;
//         console.log("your table is created");
//         console.log(sql);
//         console.log(result);
//     })
// }

// createConnectiontable()


