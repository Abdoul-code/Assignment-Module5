const express = require("express")
const todosRouter = express.Router()
const Todos = require('../models/todos.js')

    
     todosRouter.get("/",(req,res,next)=>{
           Todos.find((err,todos)=>{
               if(err){
                   res.status(500)
                   return next(err)
               }
               return res.status(200).send(todos)
           })
            })
//Create new todo 
     todosRouter.post("/",(req,res,next)=>{
          const newTodos = new Todos(req.body)
          newTodos.save((err , savedTodos) => {
              if(err){
                  res.status(500)
                  return next(err)
              }
              return res.status(201).send(savedTodos)
          })
           })
 //delete todo by id
 todosRouter.delete("/:todoId", (req,res,next) =>{
 Todos.findOneAndDelete({_id:req.params.todoId},(err,deleteItem) => {
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(200).send(`Succefully deleted item ${deleteItem.name} from the database`)

 })
 })
//Update todo by id

todosRouter.put("/:todosId",(req,res,next)=>{
    Todos.findOneAndUpdate(
        {_id:req.params.todosId},
        req.body,
        {new: true},
        (err,updateTodos)=>{
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(201).send(updateTodos)
        }
    )
})
//retrieve a single todo by id 
todosRouter.get("/:todosId",(req,res,next)=>{
    const todosId = req.params.todosId
    const foundTodo = Todos.find(todo => todo._id === todosId)
    if(!foundTodo){
        const error = new Error("The item was not found")
        res.status(500)
        return next(error)

    }
    res.status(200).send(foundTodo)

})


module.exports = todosRouter