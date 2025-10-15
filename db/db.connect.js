const mongoose=require("mongoose")

require("dotenv").config()

const mongoUri=process.env.MONGODB

const intializeDatabase=async ()=>{
   await mongoose.connect(mongoUri).then(()=>
    console.log("Database Connected Successfully")).catch((error)=>
    console.log("Failed to connect to database.",error))
}

module.exports={intializeDatabase}