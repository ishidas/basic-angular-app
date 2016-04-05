'use strict'
let express = require('express');
let app = express();
let bodyParser = require('body-parser');


app.use(express.static(__dirname + '/build'));

app.listen(3000, ()=>{
  console.log('Port 3000 is listening..')
});
