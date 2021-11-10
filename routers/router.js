const express=require('express');
const exp=express();
const ejs=require('ejs');
const router=express.Router();
const path=require('path'); 
exp.set('view engne','ejs');
exp.get('/',(req,res)=>{
    res.render('index.ejs');
});  
 
module.exports=router;