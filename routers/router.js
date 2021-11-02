const express=require('express');
const exp=express();

const router=express.Router();

router.get('/',(req,res)=>{
 res.send("hjkdhsk");
});
  
module.exports=router;