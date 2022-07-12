const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Todos Blueprint
const todoSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Todos" , todoSchema)