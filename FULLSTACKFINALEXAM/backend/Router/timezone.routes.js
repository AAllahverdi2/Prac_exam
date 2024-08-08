const express=require("express")
const router=express.Router()
const {TimeZoneController}=require("../Controller/timezone.controller")
router.get("/",TimeZoneController.getAll)
router.get("/:id",TimeZoneController.getById)
router.post("/",TimeZoneController.Post)
router.delete("/:id",TimeZoneController.delete)
module.exports=router