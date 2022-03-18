const router = require("express").Router();
const axios = require('axios');
const { useParams } = require("react-router-dom");


router.post("/countries", async (req, res, next)=>{

    try{
        const response = await axios.get(`https://soccer.sportmonks.com/api/v2.0/countries?api_token=${process.env.TOKEN_API}`)
        res.status(200).json(response.data) 
    }catch(err){
        next(err)
    }
})

router.post("/countries/:id/players", async (req, res, next)=>{
    // console.log("hola")
    const {id} = req.params
    try{
        const response = await axios.get(`https://soccer.sportmonks.com/api/v2.0/countries/${id}/players?api_token=${process.env.TOKEN_API}`)
        // console.log(response.data)
        res.status(200).json(response.data)
    }catch(err){
        next(err)
    }
})

router.post("/countries/:id/players/details", async (req, res, next)=>{
    const {id} = req.params
    try{
        const response = await axios.get(`https://soccer.sportmonks.com/api/v2.0/players/${id}?api_token=${process.env.TOKEN_API}`)
        res.status(200).json(response.data)
    }catch(err){
        next(err)
    }
})




module.exports = router
