const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

const schoolSchema = new mongoose.Schema({
    schoolName :{
        type : String,
        require :true,
    },
    username: {
        type:String,
        require:true,
    },
    email: {
        type:String,
        require:true,
    },
    password : {
        type:String,
        require:true,
    },
 
});

schoolSchema.methods.generateToken = async function(){
    try {
        console.log(process.env.JWT_SECRET_KEY)
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
const school=new mongoose.model("School",schoolSchema)
module.exports =school