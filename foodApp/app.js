const express = require("express")

// node js environment 
// modules hhtp fs os
// low level framework
// express is package of node js abstraction over nodejs for writing backend API HAI YE
// easier bana deta hai node js ko use krna 

// file system -  path-> interact/type -> file/folder
// server-  route -> request -> response/file

const app = express();

app.use(express.json());
// middleware hai 
// it is used to obtain data from request 
// adds data in req.body (body of request)

// this it like requesting and then getting the 
// response back 
// port no and then request and response fn 
app.get("/", function(req,res){
    console.log("hello from home page");
    res.send("<h1> hello from backend </h1>");
    // backend will send this response
})

app.get("/users", function(req,res){
    console.log("users page");
    res.status(200).send("data received");

})

// port listen 

app.listen(8080, function(){
    console.log("server started");
})

// http method request methods
// get get data from backend
// delete
// post send
// patch  update

// requests goes to server and server gives response

// response status codes 
// 1xx informational response
// 2xx success 
// 3xx redirection
// 4xx client error
// 5xx server error

// postman is replacement to browser

// refer jasbir repo for other http requests

// CRUD APPLICATION
// Since we can create read update delete
// install nodemon so that we dont need to refersh
// server again and again