const express=require('express');
const connectDb=require('./config/db');
const app=express();
//connect database
connectDb();
app.get('/',(re1,res)=>res.send('API running'))

//Define routes


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on ${PORT}`));