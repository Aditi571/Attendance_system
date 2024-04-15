const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

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

insightSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            //payload
            email : this.email,
            username :this.username
        },
        //secret key
        process.env.JWT_SECRET_KEY,
        {
            expiresIn : "30d",
        }
        )
        
    } catch (error) {
        console.log(error)
    }
}
const User=new mongoose.model("User",insightSchema)
module.exports =User