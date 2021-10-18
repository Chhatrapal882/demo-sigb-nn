import express from 'express';
import mongoose from "mongoose"
var app = express();


app.get('/', function (req, res) {
   res.send('Hello World');
})

const port = 8080
var server = app.listen(port, function () {
   console.log(`The server is running on port ${port}`);
   

})