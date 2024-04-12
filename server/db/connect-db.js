const mongoose=require('mongoose')
const User=require('../models/user_schema')
const data=require('../utils/jsonData')

const URL='mongodb+srv://Aditi571:GM19nPm6zRhzJtsv@cluster0.qmyxfrt.mongodb.net/Attendance?retryWrites=true&w=majority&appName=Cluster0'

const connect_db=async()=>{
    try {
        await mongoose.connect(URL)
        console.log('Connection successful')

    } catch (error) {
        console.log(error)
    }
}


module.exports=connect_db