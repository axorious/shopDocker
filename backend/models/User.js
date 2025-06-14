const mongoose = require("mongoose");
const roles = require("../constants/role");

const UserSchema = mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: roles.BUYER,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
