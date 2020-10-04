const express=require('express');
const router=express.Router();

router.post('/',(req,res)=>{
    console.log()
    res.send('User route')});

module.exports = router;