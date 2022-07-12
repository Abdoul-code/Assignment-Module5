const express = require("express")
const userRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const users = [
    {name:"Abdoul", age:29, _id:uuidv4()},
    {name:"Alima", age:40,_id:uuidv4()},
    {name:"Adama", age:41,_id:uuidv4()},
    {name:"Sidi", age:35,_id:uuidv4()}
]

userRouter.get("/", (req,res)=>{
    res.send(users)
})

userRouter.get("/:userId", (req,res)=>{
const userId = req.params.userId
const foundUserId = users.find(user => user._id === userId)
res.send(foundUserId)
})
userRouter.post("/",(req,res)=>{
const newEntry = req.body
newEntry._id = uuidv4()
users.push(newEntry)
res.send(`Succeful added ${newEntry.name} to the database!`)
})

//Update one 
userRouter.put("/:userId",(req,res)=>{
const userId = req.params.userId
const userIndex = users.findIndex(user => user._id === userId)
const foundUpdate = Object.assign(users[userIndex], req.body)
res.send(foundUpdate)
})

    // userRouter.route("/")
    // .get((req,res)=>{
    //     res.send(users)
    // })

    // .post((req,res)=>{
    //     const newEntry = req.body
    //     newEntry._id = uuidv4()
    //     users.push(newEntry)
    //     res.send(`Succeful added ${newEntry.name} to the database!`)
    //     })




module.exports = userRouter