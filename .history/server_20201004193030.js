const express=require('express');
const connectDb=require('./config/db');
const app=express();
//connect database
connectDb();
app.get('/',(re1,res)=>res.send('API running'))

//Define routes
app.use('/app/users',require('./routes/api/users'));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on ${PORT}`));