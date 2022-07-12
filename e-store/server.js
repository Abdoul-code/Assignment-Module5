const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

app.use("/inventory", require("./routes/inventory.js"))
//connect to DB
mongoose.connect('mongodb://localhost:27017/inventorydb',
()=>console.log("connect to inventory DB")
)




app.listen(9000,()=>{
    console.log("the e-store server is running on port 9000")
})