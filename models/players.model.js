const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
    {
        display_name: {
        type: String,
        required: true
      },
        nationality:{
        type:String,
        required: true
      },
        birthdate:{
        type: String,
        unique: true
      },
        height:{
        type: String,
      },
        image_path:{
        type: URL,
      },
        User: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  
    //en un futuro en el modelo ira un token para que solo se puedan registrar los usuarios
    //que nos interesan.
  
    {
      timestamps: true,
    }
  );
  
  const Player = model("Player", playerSchema);
  
  module.exports = Player;