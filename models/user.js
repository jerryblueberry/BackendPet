const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number]
    }

  
//   friendRequests: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
//   friends: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
//   sentFriendRequests: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
});
// Add 2dsphere index to the location field
userSchema.index({ location: '2dsphere' });

const User = mongoose.model("User",userSchema)
module.exports = User;