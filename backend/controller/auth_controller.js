import bcrypt from 'bcryptjs'

import User from '../models/user_model.js';
import generateToken from '../utils/generateToken.js'


export const signup = async(req , res) => {
    try {
        const {username , password , email , phone } = req.body;
        
        // PHONE
        if(phone.length !== 10){
            return res.status(400).json({error : 'invalid phone number'})
        }
        
        


        // EMAIL
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({error : 'invalid email'})
        }
        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({error : 'email already exists'})
        }

        // PASSWORD
        if(password.lenght < 8){
            return res.status(400).json({error : 'password must have 8 characters'})
        }
            // password encryption
        const salt = await bcrypt.genSalt(4);
        const hashedPass = await bcrypt.hash(password , salt)

        const newUser = User({
            username ,
            password : hashedPass,
            email,
            phone,
            profileImage : `https://avatar.iran.liara.run/username?username=${username}`
        })

        if(newUser){
            generateToken(newUser._id , res)
            await newUser.save();
            return res.status(200).json(newUser)
        }else{
            return res.status(400).json({error : 'invalid user data'})
        }


    } catch (err) {
        console.log('error in signup auth controller : \n',err)
        return res.status(500).json({error : 'internal server error '})
    }
}
export const login = async(req , res) => {
    try {
        const {password , email  } = req.body;
        
        


        // EMAIL
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({error : 'invalid email'})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({error : 'user not found'})
        }

        // PASSWORD
        if(password.lenght < 8){
            return res.status(400).json({error : 'password must have 8 characters'})
        }
            // password encryption
        const isCorrcetPass = await bcrypt.compare(password , user?.password || '')
        if(!isCorrcetPass){
            return res.status(400).json({error : 'wrong password'})
        }else {
            generateToken(user._id , res );
            return res.json(user)
        }


       


    } catch (err) {
        console.log('error in signin auth controller : \n',err)
        return res.status(500).json({error : 'internal server error '})
    }
}

export const logout =(req , res) => {
    try {
        res.cookie('jwt','',{maxAge : 0});
        return res.json({message : 'logout success'})
    } catch (error) {
        console.log('error in logout auth controller : \n',err)
        return res.status(500).json({error : 'internal server error '})
    }
}
export const me =(req , res) => {
    try {
        
        return res.json(req.user)
    } catch (error) {
        console.log('error in logout auth controller : \n',err)
        return res.status(500).json({error : 'internal server error '})
    }
}