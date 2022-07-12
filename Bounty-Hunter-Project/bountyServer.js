const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


 app.use(express.json())
 app.use("/bounties", require("./routes/bountyRouter.js"))
 app.use(morgan('dev'))
// connect to DB
mongoose.connect('mongodb://localhost:27017/bountydb',
()=> console.log("connect to bounties DB")
)

app.listen(9000,()=>{
    console.log("My bounty server is running on port 9000")
})