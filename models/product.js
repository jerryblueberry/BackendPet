const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postType:{
    type:String,
    enum:['Content','Adoption','Lost'],
    default:"Content",
  },
  description: String,
  breed: {
    type: String,
    
  },
  age: {
    type: Number,
    
  },
  image: String,
  weight: {
    type: Number,    
  },
  category: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  timestamp: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
  location:{
    type:{
      type:String,
      default:"Point",
    },
    coordinates:{
      type:[Number],
      required:true,
    }
  }
});
productSchema.index({ location: '2dsphere' });


module.exports = mongoose.model('Product', productSchema);
