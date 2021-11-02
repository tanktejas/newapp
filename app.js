const express=require('express');
const ejs=require('ejs');
const exp=express();
const router=require('./routers/router');

exp.use(router);
  
exp.listen(process.env.PORT | 3000 , (req,res)=>{
  console.log("success...");     
});       