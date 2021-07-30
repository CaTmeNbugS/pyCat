const express = require('express');
const router = express.Router();
const User = require('../modules/user'); 
const passport = require('passport');
const jwt = require('jsonwebtoken')
require("dotenv").config();

router.post('/registration', function(req, res){
    let new_user = new User({
        name:  req.body.name,
        surname:  req.body.surname,
        email:  req.body.email,
        number: req.body.number,
        password:  req.body. password,
        city:  req.body.city,
    });
    User.add_user(new_user, function(err, user){
        if(err) {
            res.json({success:false, msg:"Пу-пу-пу ОшЫбкА"});
         } else {
            res.json({success:true, msg:"Все Четко"});
         }   
        }); 
});
router.post('/auth', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByLogin(email, function(err, user){
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'Пользователь не найден'});
        }    

        User.compare_pass(password, user.password, function(err, isMatch){
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
                    expiresIn: 3600 * 24 * 24
                });

                res.json({success:true, token: 'JWT'+ token , user: {id: user._id,name: user.name, surname: user.surname, email: user.email,number: user.number, city: user.city} })
            }else{
                return res.json({success:false, msg:'Неправильный пароль'});
            }   
        });
    });
});

module.exports = router;