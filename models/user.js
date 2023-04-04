const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'the user\'s name is required'
  },
  email: {
    type: String,
    required: 'the user\'s email is required'
  },
  password: {
    type: String,
    required: 'the user\'s password is required'
  },
  scannedItems: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Item'
  },
  likedOptions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Option'
  },
  dislikedOptions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Option'
  }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject)  => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
