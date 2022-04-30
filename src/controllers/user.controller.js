UserCtrl = {}

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

// endpoint para crear usuarios
UserCtrl.createUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const { username, email, password } = req.body;
    const newUser = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, salt),
    });
    res.json({message:"User created"});
}

// endpoint para loguear usuarios
UserCtrl.loginUser = async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ where : {username : username }});
    if(user){
       const password_valid = await bcrypt.compare(password,user.password);
       if(password_valid){
           token = jwt.sign({ "id" : user.id,"email" : user.email,"username":user.username },process.env.SECRET);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ error : "Password Incorrect" });
       }
     
     }else{
       res.status(404).json({ error : "User does not exist" });
     }
     
}

module.exports = UserCtrl;
