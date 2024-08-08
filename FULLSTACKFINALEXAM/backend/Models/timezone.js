const mongoose=require("mongoose")
const TimeZone=mongoose.model("timezone",new mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    image:String
}))
module.exports={TimeZone}