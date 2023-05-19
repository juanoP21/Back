const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  price: { type: int, require: true },
  minim: {
    type: int,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = model("product", ProductSchema);
