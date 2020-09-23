const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors');
// const axios = require('axios').default;
const fetch = require('node-fetch');

const app = express();


const { HandleDownload } = require('./HandleLoad.js')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.json({"message":"Welcome to the middle man! "})
})
app.get('/url/:EncryptedFileURL',HandleDownload);


const PORT = 1700

app.listen(PORT, () => {
  console.log(`Lauching server on port ${PORT}`)
})
