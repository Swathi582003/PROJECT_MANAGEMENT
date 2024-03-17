// import express from 'express'
const express = require('express');
// import dotenv 
require('dotenv').config();
// create express app
const app = express();
//import mongoose
const mongoose = require('mongoose');
//import taskRoutes
const taskRoutes = require('./routes/taskRoutes');
//imports cars
const cors = require('cors');

//middleware (path : root ,method : get)
app.use((req,res,next)=>{
    console.log("path "+req.path+" method "+req.method);
    next();
});
app.use(express.json());
// call cars
app.use(cors())
//creating api
// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });

// DB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,(req,res)=>{
        console.log("DB Connected Successfully and listening to "+ process.env.PORT);
    });

})
.catch((error)=>{
    console.log(error);
})
// set up base route
app.use("/api/tasks",taskRoutes);

