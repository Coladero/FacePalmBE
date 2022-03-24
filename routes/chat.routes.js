const router = require("express").Router();
const isAuthed = require("../middleware/isAuthed");
const Chat = require("../models/Chat.model")
const Message = require("../models/Message.model");
const User = require("../models/User.model");

//* Get the user's from the DB.

router.get("/users", async (req, res, next)=>{
    try{
        const response = await User.find().select("name")
        // console.log(response)
        res.status(200).json(response)
    }catch(err){
        next(err)
    }
});
//*Line19, Make the route for create the chat.
router.post("/messenger/:userId", async (req, res, next)=>{
    //*Line21, first user
    const {_id} = req.payload
    
    //*Line24, second user
    const {userId} = req.params

    //*Line27,check if the chat exist or need new chat
    try{
        const checkChat = await Chat.findOne({participants:{$all:[_id, userId]}})
        if(checkChat){
            res.json(checkChat)
        }else{
            const newChat = await Chat.create({participants:[_id, userId]})
            res.json(newChat)
        }
    }catch(err){
        next(err)
    }
})

router.get("/messages/:chatId" , async (req, res, next) =>{
    const {chatId} = req.params

    try{
        const response = await Message.find({chatId}).populate("sender")
        res.json(response)
    }catch(err){
        next(err)
    }
})
module.exports = router;