'use strict';
//importing Express
const express = require('express');
var https = require("https");

//const
const port = 8081;
const host = '0.0.0.0';


//server App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Viewers! This is my first Node Project.')
});

//
app.listen(port,host, () => {
  console.log("********************************************");
  console.log(`My app listening at http://${host}:${port}`)
  console.log("********************************************");
});