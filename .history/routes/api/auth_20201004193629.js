const express=require('express');
const router=express.Router();

//@desc
//@
//
router.get('/',(req,res)=>res.send('Auth route'));

module.exports = router;