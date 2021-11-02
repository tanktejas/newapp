const express=require('express');
const exp=express();
const ejs=require('ejs');

const router=require('./routers/router');

exp.use(router);

exp.listen(process.env.PORT | 3000 , (req,res)=>{
  console.log("success...");
});       