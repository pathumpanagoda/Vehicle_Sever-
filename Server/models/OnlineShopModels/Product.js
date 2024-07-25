const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,

    },
    category:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
});

module.exports = mongoose.model("Product", ProductSchema);
