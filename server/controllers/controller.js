const User = require("../models/user_schema")
const UserIsPresent = require("../models/Present_details")

const home=(req,res)=>{
    try {
        res.status(200).json({mg:'home'})
    } catch (error) {
       console.log(error) 
    }
}

const register = async (req, res) => {
    try {

      const { username, email, number, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        return res.status(400).json({ msg: "email already exists" });
      }
      const newUser = await User.create({ username, email, number, password });
      res.status(201).json({
        msg:newUser ,
        token: await newUser.generateToken(),
        userID : newUser._id.toString(),
      })
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (!userExist) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // const user = await bcrypt.compare(password, userExist.password);
      const isPasswordValid = await userExist.comparePassword(password);
  
      if (isPasswordValid) {
        res.status(200).json({
          message: "Login Successful",
        //   token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Invalid email or passord " });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const saveAttendance=async(req,res)=>{
    try {

      const { email,present , date } = req.body;
  
      const newUser = await UserIsPresent.create({  email, present, date });
      res.status(201).json({
        msg:newUser ,
      })
      
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  const fetch_dashboard_details=async(req,res)=>{
    try {
      const userData=req.user;
      console.log(userData)
      return res.status(200).json({msg:userData});
      
    } catch (error) {
      console.log(error);
    }
  }
  const fetch_names = async (req, res) => {
    try {
      const data = await User.find({});    
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching names:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
module.exports ={home,register,login,saveAttendance,fetch_names,fetch_dashboard_details}