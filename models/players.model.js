const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
  {
    player_id: String,
    display_name: String,
    shooting:String,
    dribbling:String,
    running: String,
    ballControl: String,
    image_path: String,

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
