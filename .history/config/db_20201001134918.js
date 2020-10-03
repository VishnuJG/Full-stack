const mongoose=require('mongoose');
const config=require('config');
const db=config.get('mongoURI');


const connectDB=async()=>{
    try{
        await mongoose.connect(db,{
            useN
        });
        console.log('MongoDB Connected');
    }
    catch(err){
        console.error(err.message);
        //Exits process on failure
        process.exit(1);
    }
}


module.exports = connectDB;

