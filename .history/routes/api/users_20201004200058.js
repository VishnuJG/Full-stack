const express=require('express');
const router=express.Router();
const{check,validationResult}=require('express-validator/check');

router.post('/',[
    check('name','Name is required ').not().isEmpty
],(req,res)=>{
    console.log(req.body);
    res.send('User route');
});

module.exports = router;