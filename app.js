const express=require('express');
const ejs=require('ejs');
const exp=express();
const port=process.env.PORT || 3000;
const router=require('./routers/router');

exp.use(router);
  
exp.listen(port , (req,res)=>{
  console.log("success...");     
});       
