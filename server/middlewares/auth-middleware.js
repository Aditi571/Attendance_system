const jwt = require("jsonwebtoken");
const User = require("../models/user_schema");

const authmiddleware = async (req, res, next) => {
    console.log('Backend');
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "No Token" });
    }

    let jwttoken = token.replace("Bearer", "").trim();
    if (jwttoken.endsWith(',')) {
       jwttoken = jwttoken.slice(0, -1);
    }
    console.log('Received JWT Token:', jwttoken);

    try {
        const secretKey = process.env.JWT_SECRET_KEY;
        console.log('Using Secret Key:', secretKey);

        const isVerified = jwt.verify(jwttoken, secretKey);
        console.log('Verified Token Payload:', isVerified);

        const userData = await User.findOne({ email: isVerified.email }).select('-password');
        if (!userData) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = userData;
        req.token = token;
        next();
    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = { authmiddleware };
