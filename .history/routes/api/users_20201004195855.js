const express=require('express');
const router=express.Router();
const{check,validationResult}=require()

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('User route');
});

module.exports = router;