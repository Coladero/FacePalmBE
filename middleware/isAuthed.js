const jwt = require("express-jwt")
const res = require("express/lib/response")

//////!Authenticad User//////
const isAuthed = jwt({
  secret: process.env.SECRET_TOKEN,
  algorithms: ["HS256"],
  requestProperty: "payload",
  //*1.Line9, check the user y give the token.
  getToken: (req) => {
    if (req?.headers?.authorization?.split(" ")[0] === "Bearer") {
      const authToken = req.headers.authorization.split(" ")[1]
      console.log("Give the Token to the User.")
      return authToken
    } else {
      console.log("The token is missing.")
      return null
    }
  }
})


module.exports = isAuthed