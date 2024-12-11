//import modules
const https = require("https");
const fs = require("fs");
const os = require("os");
const path = require("path");

//Create Server
const server = https.createServer("/",(req,res)=> {
    if(req.url === "/"){
    res.writeHead(200) ; 
    res.end("Home Page") ;   

    }else if(req.url === "/contact") {
        res.writeHead(200);
        res.end("Home Page"); 
    }else if(req.url === "/contact") {
        res.writeHead(200);
        res.end("Home Page"); 
    }
});

server.listen(400, ()=> {
    console.log("server is running in 400")
});