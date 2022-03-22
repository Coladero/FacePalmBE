const {Schema, model} = require('mongoose')


const messageSchema = new Schema(
    {
        sender: {
                ref: "User",
                type: Schema.Types.ObjectId,
            },
        text: String,
        chatId: {
                ref:"Chat",
                type: Schema.Types.ObjectId,
            },
        
    },
    {
        timestamps: true,
    },
);


const Message = model("Message", messageSchema);

module.exports = Message;