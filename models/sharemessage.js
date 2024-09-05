const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
    senderId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    recepientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    messageType:{
        type:String,
        enum:["text","image","share"],
    },
    message:String,
    imageUrl:String,
    linkUrl:String,
    timeStamp:{
        type:Date,
        default:Date.now,
    }
    
})