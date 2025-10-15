const express=require("express")

const app=express()
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(express.json())


const {intializeDatabase}=require("./db/db.connect")

const fs=require("fs")

const Event=require("./models/event.models")

const Speaker=require("./models/speaker.models")





intializeDatabase()



const readAllevents=async()=>{

    try{
    const events= await Event.find()
    return events
    }catch(error){
        console.log("Error occured while reading events",error)
    }
}

app.get("/",async(req,res)=>{

    try{

        const events=await readAllevents()

        if(events.length!=-1){
            res.json(events)
        }else{
            res.status(404).json({error:"No Events Found"})
        }
        
        
    }catch(error){
        res.status(505).json({error:"Error occured in routing",details:error.message})
    }
})


const getEventDataByName=async(eventId)=>{

    try{
    const event= await Event.findById(eventId)

    return event
    }catch(error){

        throw error

    }
}

app.get("/events/:eventId",async (req,res)=>{
    try{

        const event=await getEventDataByName(req.params.eventId)
        res.json(event)
        
    }catch(error){
        res.status(505).json({error:"Failed to get the event by ID",details:error.message})
    }
})

PORT=3000

app.listen(PORT,()=>{
    console.log(`Server is Running ${PORT}`)
})
