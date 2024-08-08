const express=require("express")
const app=express()
const TimezonoRouter=require("./Router/timezone.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 7009
app.use(express.json())
mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connected to mongodb")
})
app.use("/timezone",TimezonoRouter)
app.listen(PORT,()=>{
    console.log("back runnig on 7009")
})