const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
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

  phoneNumber: {
    type: String,
  },

  gender: {
    type: String,
  },

  country: {
    type: String,
  },

  address: {
    type: String,
  },


  token: {
    type: String,
    required: true,
  },

  accountBalance: {
    type: Number,
    default: 0.00
  },

  status: {
    type: Boolean,
    default: false,
  },

  verify: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  admin:{
     type: mongoose.SchemaTypes.ObjectId,
     ref: "admin"
  },
  

}, {timestamps: true});

module.exports = User = mongoose.model('User', UserSchema )

