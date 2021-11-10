const express=require('express');
const ejs=require('ejs');
const exp=express();
const port=process.env.PORT || 3000;
const router=require('./routers/router');
        
exp.use(router);
exp.use(express.static('views'));
exp.set('view engne','ejs');
  
exp.get('/',(req,res)=>{
  res.render('index.ejs');
});  

exp.listen(port , (req,res)=>{
  console.log("success...");     
});       
