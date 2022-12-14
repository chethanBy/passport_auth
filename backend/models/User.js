const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = new model("User", userSchema);
