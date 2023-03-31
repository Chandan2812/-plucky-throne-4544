const express=require("express")
const {HotelModel}=require("../model/hotel.model")

const hotelRouter=express.Router()

hotelRouter.get("/",async(req,res)=>{
    const hotels=await HotelModel.find()
    res.send(hotels)
})

module.exports={hotelRouter}