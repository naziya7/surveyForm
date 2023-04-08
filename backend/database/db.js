const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
const dotenv = require("dotenv");
dotenv.config();
async function getConnection() {
    await mongoose.connect(process.env.url, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Connected to MongoDB successfully");
        }
    })
}
module.exports = getConnection

