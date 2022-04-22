const express = require('express');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const authroutes = require('./routes/authroutes');
const billroutes = require('./routes/billroutes');
const stocksroutes = require('./routes/stocksroutes');
const db=require('./config/db.json');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( express.static( "public" ) );
app.use(favicon(path.join(__dirname,'public','favicon.ico')));


app.set('view engine','ejs');

const url=db.uri;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
console.log('Connect to db');
})
.catch((err)=>{
console.log(err);
})

app.use(authroutes);
app.use(billroutes);
app.use(stocksroutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT);