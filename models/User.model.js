const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    surname:{
      type:String,
      required: true
    },
    email:{
      type: String,
      unique: true
    },
    password: String,
  },

  //en un futuro en el modelo ira un token para que solo se puedan registrar los usuarios
  //que nos interesan.

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
