const mongoose = require('mongoose');

//creating schema
const Schema = mongoose.Schema;

//creating task schema
const TaskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
},
    {timestamps:true}

);

module.exports=mongoose.model("Task",TaskSchema);
