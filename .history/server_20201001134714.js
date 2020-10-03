const express=require('express');
const connectDb=require('./config/')
const app=express();
app.get('/',(re1,res)=>res.send('API running'))
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on ${PORT}`));