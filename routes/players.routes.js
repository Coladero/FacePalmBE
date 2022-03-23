const router = require("express").Router();
const PlayersModel = require("../models/Player.model")
const isAuthed = require("../middleware/isAuthed")

  router.get("/player/:id/edit", async (req, res, next)=>{
    const {player_id, shooting, dribbling, running, ballControl} = req.body
    try{
        const response = await PlayersModel.findById(id,{player_id, shooting, dribbling, running, ballControl})
        res.json(response)
    }catch{
        
    }
  })
  router.patch("/player/:id/edit", async (req, res, next) => {
    const {player_id, shooting, dribbling, running, ballControl} = req.body
    const { id } = req.params
  
    try {
  
    await PlayersModel.findByIdAndUpdate(id, {player_id, shooting, dribbling, running, ballControl })
      res.json("Updated player")
  
    } catch(err) {
      next(err)
    }
  
  })

  router.delete("/player/:id/delete", async (req, res, next) => {
    const {id} = req.params
  
    try {
      await PlayersModel.findByIdAndDelete(id)
      res.json("Player delete")
    } catch(err) {
      next(err)
    }
  })

  router.post("/players/add/:id",isAuthed, async (req, res, next)=>{
    const{id} = req.params
    const {  display_name, image_path, shooting, dribbling, running, ballControl} = req.body
    // console.log(req.body)z
    try{
        const response = await PlayersModel.create({
          player_id: id,
          display_name: display_name,
          image_path: image_path,
          shooting:shooting,
          dribbling:dribbling,
          running:running,
          ballControl:ballControl,
          user:req.payload._id
        })
        res.json(response)
    }catch(err){
        next(err)
    }
  })


  module.exports = router