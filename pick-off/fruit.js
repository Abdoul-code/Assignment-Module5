const express = require("express")
const fruitRouter = express.Router()

const fruit = [
    {"type":"banana","brand":"chiquita","price":0.5},
    {"type":"apple","brand":"gala","price":0.5},
    {"type":"orange","brand":"naval","price":0.75}
]

fruitRouter.get("/",(req,res,next)=>{
res.send(fruit)
})





module.exports = fruitRouter