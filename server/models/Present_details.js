const mongoose=require('mongoose')

const presentSchema = new mongoose.Schema({
    email: {
        type:String,
        require:true,
    },
    present:{
        type:Boolean,
        require:true,
    },
    date : {
        type:String,
        require:true,
    },
 
});


const PresentDetails=new mongoose.model("UserIsPresent",presentSchema)
module.exports =PresentDetails