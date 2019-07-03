// import express
const express = require("express")
// create the express application and port
const app = express()
// establish a port to work withs
const port = 3000   
// import body parser middleware
const bodyParser = require("body-parser")

// import routes module
const routes = require('./routes/index');

//: import the mongoose module
const mongoose = require('mongoose');

//: import mongoDB config settings
const config = require('./config/config.json')

//: connect to mongodb from mongoose, log my connection
mongoose.connect(config.mongoURI,{useNewUrlParser:true},(err)=>{
    if(err){
        console.error(err)
    }
    console.log("My app is connected to mongoDB");
});

// I can use middleware such as body parser with
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) // used to access parameters

// I can write custom middleware to parse urls
app.use((req, res, next)=>{
    // log the message, Custom middleware run
    console.log("Middleware is running")
    // I can also add custom properties to the req object
    req.userId = 1;
    req.user = "Michael Ballard";
    next();
});

// set the root route
app.get("/",(req,res)=>{
    // log a custom middleware function:
    console.log(req.user);
    console.log(req.userId)
    // send back message hello world
    return res.send("Hello Node")
});

// add middle ware to access custom router
app.use('/api', routes)

// configure listening port
app.listen(port, ()=> console.log(`Example app is listening on port ${port}`));