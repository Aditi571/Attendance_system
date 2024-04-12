const mongoose=require('mongoose')

const insightSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
    },
    email: {
        type:String,
        require:true,
    },
    number : {
        type:String,
        require:true,
    },
    password : {
        type:String,
        require:true,
    },
 
});
const User=new mongoose.model("User",insightSchema)
module.exports =User