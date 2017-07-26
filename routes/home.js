/**
 * Created by harshitbisht96 on 25/7/17.
 */

const express=require('express');
const route=require('express').Router();
route.get('/',function(req,res){
    res.render('homepage');
})

module.exports=route;