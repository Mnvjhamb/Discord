const User = require("../../../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.postRegister = async (req, res)=>{
    
    try{

        const {username, mail, password} = req.body;

        //check if user already exists
        const userExists = await User.exists({mail});
        if(userExists){
            return res.status(409).send("User with same email already exists");
        } 

        //encrypt password and create new user
        const encryptedPassword = await bcrypt.hash(password, 10);

        const userDetails = new User({username, mail, password: encryptedPassword});
        await userDetails.save();

        // create jwt token
        const token = jwt.sign({
            userId: userDetails._id,
            mail
        }, process.env.TOKEN_KEY,{
            expiresIn: '24h'
        });
    
        res.status(201).json({userDetails, token});
        
    } catch(e){
        return res.status(500).send(`Error occured: ${e}`);
    }

};

module.exports.postLogin = async (req, res)=>{
    
    try{

        const {mail, password} = req.body;

        // find user with same email
        const userDetails = await User.findOne({mail});
        
        // check if user exists and password is correct
        if(userDetails && bcrypt.compare(password, userDetails.password)){
            // send jwt token
            const token = jwt.sign({
                userId: userDetails._id,
                mail
            }, process.env.TOKEN_KEY,{
                expiresIn: '24h'
            });

            res.status(200).json({userDetails, token});
        } else {
            res.status(400).send("incorrect email/password");
        }

    } catch(e){
        return res.status(500).send(`Error occured: ${e}`);
    }
} 