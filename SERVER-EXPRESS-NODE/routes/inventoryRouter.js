const express = require("express")
const { restart } = require("nodemon")
const {v4 :uuidv4} = require("uuid")
const inventoryRouter = express.Router()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id:uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id:uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id:uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id:uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id:uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id:uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id:uuidv4()
    }
]

inventoryRouter.get("/",(req,res)=>{
res.send(inventoryItems)
})

inventoryRouter.get("/type",(req,res)=>{
const type = req.query.type
const filterItems = inventoryItems.filter(item => item.type === type)
res.send(filterItems)
})

inventoryRouter.delete("/:inventoryId", (req,res)=>{
const inventoryId = req.params.inventoryId
const inventoryIndex = inventoryItems.findIndex(itemIndex => itemIndex._id === inventoryId)
inventoryItems.slice(inventoryIndex,1)
res.send("Successfully deleted Item!!")
})




module.exports = inventoryRouter