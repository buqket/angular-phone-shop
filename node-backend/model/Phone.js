const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Phone = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "phone",
  }
);

module.exports = mongoose.module("phone", Phone);
