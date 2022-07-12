const express = require("express")
const app = express()

app.use("/fruit",(req, res, next )=>{
console.log("Hello world")
next()
})
// app.use("/fruit",(req,res,next)=>{
//     req.body =  [
//         {"type":"banana","brand":"chiquita","price":0.5},
//         {"type":"apple","brand":"gala","price":0.5},
//         {"type":"orange","brand":"naval","price":0.75}
//     ]
//     next()
// })

// app.use("/items", (req,res,next)=>{
//     req.body = {name:"Abdoul"}
//     next()
// })
// app.use("/fruit", (req,res,next)=>{
//    res.send(req.body)
   
// })
app.use("/fruit",require("./fruit.js"))



app.listen(9000,()=>{
console.log("Server is running on port 9000")
})