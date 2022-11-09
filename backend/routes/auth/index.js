const express = require('express');
const { postLogin, postRegister } = require('./utils');
const router = express.Router();
const joi = require('joi');
const { verifyToken } = require('./utils/middlewares');
const validator = require('express-joi-validation').createValidator({});

const registerSchema = joi.object({
    username : joi.string().min(3).max(12).required(),
    password : joi.string().min(6).required(),
    mail : joi.string().email().required()
})

const loginSchema = joi.object({
    password : joi.string().min(6).required(),
    mail : joi.string().email().required()
})

router.post('/register', validator.body(registerSchema), (req, res)=>{
    postRegister(req, res);
});

router.post('/login',validator.body(loginSchema), (req, res)=>{
    postLogin(req, res);
});

//test route
router.get('/test', verifyToken, (req, res)=>{
    res.send('request passed');
})

module.exports = router;