const bcrypt = require('bcrypt');
const User = require('../Model/UserModel');
const UserModel = require('../Model/UserModel');


const getRegister = async(req,resp)=>{
 resp.render('register')
}

const postRegister= async(req,resp)=>{
    const {uname,pass}= req.body;
    const existingUser = await User.findOne({uname})
    if (existingUser) {
        return res.send('Username Already Exist');
    } 

    const hashedPassword = await bcrypt.hash(pass,10);
    await User.create({uname,pass,hashedPassword})
    res.end('register')
}

const postLogin = async (req,resp)=>{
    const {uname,pass} = req.body;
    const user = await User.findOne({uname})

    if (user && await bcrypt.compare(pass,user.pass)) {
        req.session.uname = user.uname;
    } else {
        res.send('Invalid Credentials')
    }
    res.end('Login')
}


const logout =(req,resp)=>{
    req.session.destroy(()=>res.end("error"))
}