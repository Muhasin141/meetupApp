const mongoose=require("mongoose")

const eventSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true,
        enum:["Online Event","Offline Event"]
    },
    hostedBy:{
        type:String,
        
    },
    price:{
        type:Number,
        required:true,
        default:0    },
   startDate:{
    type:Date,
    required:true,

 },
 endData:{
    type:Date,
    required:true
 },
 location:{
    name:{
    type:String,
    required:true},
    address:{
        type:String,
        required:true,
    },
 },
 details:{
    type:String,


 },
 additionalInfo:{
    dressCode:{
        type:String,
        enum:["Smart Casual","Business Casual","Formal","Casual","No dress Code"]
      },
    ageRestrictions:{
        type:String,
        enum:["18 and above","No Age Restriction"]

    }
 },

 speakers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Speaker",
    default:[]}],

 eventTags:{
    type:[String],
    default:[]
 },imageUrl:{
    type:String,
    
}
},{
timestamps:true})

const Event=mongoose.model("Event",eventSchema)

module.exports=Event