const express = require('express')
const { restart } = require('nodemon')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

// Get inventory
inventoryRouter.get("/",(req,res,next)=>{
    Inventory.find((err,inventoryItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventoryItem)
    })
    
})

//Get one 
// inventoryRouter.get("/:itemId",(req,res,next)=>{
//     Inventoty.find(
//         {_id:req.params.itemId},
//         (err,singleItem)=>{
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(singleItem)
//         }
//     ) 
// })
// Post
inventoryRouter.post("/",(req,res,next)=>{
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedItem)

    })
})
// Delete Item 
inventoryRouter.delete("/:itemId", (req,res,next)=>{
    Inventory.findOneAndDelete({_id:req.params.itemId},(err, deleteItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Succefully deleted item ${deleteItem.name} from the database `)

    })

})
//update by id
inventoryRouter.put("/:itemId",(req,res,next)=>{
    Inventory.findOneAndUpdate(
        {_id:req.params.itemId},
        req.body,
        {new:true},
        (err,updateItem)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateItem)

        })
})

module.exports = inventoryRouter