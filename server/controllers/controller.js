const User = require("../models/user_schema")

const home=(req,res)=>{
    try {
        res.status(200).json({mg:'home'})
    } catch (error) {
       console.log(error) 
    }
}

const register = async (req, res) => {
    try {
      // const data = req.body;
      //console.log(req.body);
      const { username, email, number, password } = req.body;
  
      const userExist = await User.findOne({ email });
      // //console.log(userExist)
  
      if (userExist) {
        return res.status(400).json({ msg: "email already exists" });
      }
  
      // Creating a new user instance
      const newUser = await User.create({ username, email, number, password });
      
      console.log(newUser)
      
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

  const fetch_names=async(req,res)=>{
    const data=await User.find();
    res.status(200).json(data)

  }
module.exports ={home,register,login,fetch_names}