const mongoose = require('mongoose');
const validator = require('validator');

const optionSchema = new mongoose.Schema({
  contributor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  method: {
    type: String,
    required: true
  },
  likers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User'
  },
  dislikers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User'
  }
});

optionSchema.set('toJSON', {
  transform: (document, returnedObject)  => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;
