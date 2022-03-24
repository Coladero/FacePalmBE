const router = require("express").Router();
const isAuthed = require("../middleware/isAuthed");
const PlayerModel = require("../models/Player.model")
const UserModel = require("../models/User.model")


router.get("/profile", isAuthed, async (req, res, next) =>{
  const {_id} = req.payload
    try{
      const response = await UserModel.findById({_id})
      res.json(response)
    }catch(err){
      next(err)
    }
})
router.get("/agenda",isAuthed, async (req, res, next)=>{
    const{_id} = req.payload

    try{
        const response = await PlayerModel.find({user:_id})
        // console.log(response)
        res.json(response)
    }catch(err){
      next(err)
    }
})




module.exports = router
