const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

//connect to DB
mongoose.connect('mongodb://localhost:27017/todosdb',
()=>console.log("connected to the DB")
)
app.use("/Todos", require("./routes/todosRouter.js"))

// Error handler
app.use((err,req,res,next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000,()=>{
    console.log("Todo server is running on port 9000")
})