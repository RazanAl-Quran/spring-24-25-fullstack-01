// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app  = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 3002;

// Routes || Endpoints || Request URL

// localhost:3001/test
app.get("/test",(request,response)=>{
    console.log('hello from test console');
    // response.send('This is a test route');
    response.json({test: "test test"});
})


// home route
// localhost:3001/
app.get("/",(req,res)=>{
    res.send("Welcome to your first API server")
})

// not found route
app.use((req,res)=>{
    res.json({ message: "🚫 Route not found" });
})


app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
    
});