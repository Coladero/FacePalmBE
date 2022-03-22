const {Schema, model} = require('mongoose')



const chatSchema = new Schema(
    {
        participants:[
            {
                ref: "User",
                type: Schema.Types.ObjectId,
            },
        ],
    },
    {
        timestamps: true,
    }
);


const Chat = model("Chat",chatSchema)

module.exports = Chat;