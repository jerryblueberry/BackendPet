const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comment: String,
  rating: Number, // Add this field if you want to include ratings
  // other fields as needed
});

module.exports = mongoose.model('Review', reviewSchema);
