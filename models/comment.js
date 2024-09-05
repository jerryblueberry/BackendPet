const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
   
    comment:String,

});
module.exports  = mongoose.model('Comment',commentSchema);
