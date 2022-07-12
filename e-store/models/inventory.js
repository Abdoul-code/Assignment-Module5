const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    unit_price:{
        type:String,
        required:true
    },
    quantity_in_stock: Number
})

module.exports = mongoose.model("Inventory", InventorySchema)