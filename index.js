//Packages
const express = require("express");
const mongoose = require("mongoose");


const authprocess = require('./routes/auth.js')
const app = express();

// Router
app.use(express.json());
app.use(authprocess)
//connecting to the database
const Port  = 5000;
mongoose
  .connect('mongodb+srv://campuslinktester1:campuslinktester1@cluster0.qchrfqf.mongodb.net/')
  .then(() => {
    console.log("Successfully Connected to the database :)");
  })
  .catch((error) => {
    console.log(`Something Went Wrong:(\n${error}`);
  });



app.listen(Port, "0.0.0.0",()=>{
    console.log("connected to the Port: "+Port)
})