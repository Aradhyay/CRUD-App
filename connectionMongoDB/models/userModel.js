const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    age: {
      type: Number,
      required: true

    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const userModel = model('User', UserSchema);

 module.exports = userModel;