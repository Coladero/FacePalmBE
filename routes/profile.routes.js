const router = require("express").Router();
const isAuthed = require("../middleware/isAuthed");
const PlayerModel = require("../models/Players.model")


router.get("/profile",isAuthed, async (req, res, next)=>{
    const{_id} = req.payload

    try{
        const response = await PlayerModel.find({user:_id})
        console.log(response)
        res.json(response)
    }catch(err){
      next(err)
    }
})

module.exports = router