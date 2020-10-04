const express=require('express');
const router=express.Router();
const{check,validatio}

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('User route');
});

module.exports = router;