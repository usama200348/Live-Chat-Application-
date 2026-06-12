const moongoose = require('mongoose');


const messageSchema = new moongoose.Schema({
    sender:String,
    message:String
},
{
    timestamps:true,
}
);

module.exports = moongoose.model("Message",messageSchema);