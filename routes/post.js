/**
 * Created by harshitbisht96 on 25/7/17.
 */
const express=require('express');
const route=require('express').Router();
const multer=require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.'+file.mimetype.toString().split("/")[1])
    }
})

var upload = multer({ storage: storage }).single('avatar');

route.post('/', function (req, res) {

    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return
        }
        console.log(req.body);
        res.send({success:true});


        // Everything went fine
    })
});
// route.post('/',function(req,res){
//     console.log(req.body);
//     res.send({success:true});
// })

module.exports=route;