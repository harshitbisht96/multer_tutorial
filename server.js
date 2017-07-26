/**
 * Created by harshitbisht96 on 25/7/17.
 */
const express=require('express');
const app=express();
const path=require('path');
const bp = require('body-parser');
const cp=require('cookie-parser');
// const logger=require('morgan')
const imageCollection=require('./routes/post');
const homeRoute=require('./routes/home');

// app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bp.json());
app.use(bp.urlencoded());
app.use(cp());

app.use('/',homeRoute);
app.use('/addPost',imageCollection);
app.listen(1234,function(){
    console.log("app running at http://localhost:1234");
});