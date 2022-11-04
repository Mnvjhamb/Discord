const User = require("../../../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.postRegister = async (req, res)=>{
    
    try{

        const {username, email, password} = req.body;

        //check if user already exists
        const userExists = await User.exists({email});
        if(userExists){
            return res.status(409).send("User with same email already exists");
        } 

        //encrypt password and create new user
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = new User({username, email, password: encryptedPassword});
        await user.save();

        // create jwt token
        const token = jwt.sign({
            userId: user._id,
            email
        }, process.env.TOKEN_KEY,{
            expiresIn: '24h'
        });
    
        res.status(201).json({user, token});
        
    } catch(e){
        return res.status(500).send(`Error occured: ${e}`);
    }

};

module.exports.postLogin = async (req, res)=>{
    
    try{

        const {email, password} = req.body;

        // find user with same email
        const user = await User.findOne({email});
        
        // check if user exists and password is correct
        if(user && bcrypt.compare(password, user.password)){
            // send jwt token
            const token = jwt.sign({
                userId: user._id,
                email
            }, process.env.TOKEN_KEY,{
                expiresIn: '24h'
            });

            res.status(200).json({user, token});
        } else {
            res.status(400).send("incorrect email/password");
        }

    } catch(e){
        return res.status(500).send(`Error occured: ${e}`);
    }
} 