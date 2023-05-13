const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: { type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  username: { type: String, require: true, unique: true },
});

module.exports = model("Usuario", UsuarioSchema);
