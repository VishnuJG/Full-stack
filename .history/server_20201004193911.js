const express=require('express');
const connectDb=require('./config/db');
const app=express();
//connect database
connectDb();
app.get('/',(re1,res)=>res.send('API running'))

//Define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/ap/auth',require('./routes/api/auth'));
app.use('/app/profile',require('./routes/api/profile'));
app.use('/app/posts',require('./routes/api/posts'));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on ${PORT}`));