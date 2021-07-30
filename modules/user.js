const mongoose = require('mongoose');
const crypt = require('bcryptjs');

const User_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
    }
});

const User = module.exports = mongoose.model('User', User_schema);

module.exports.getUserByLogin = function(email, callback) {
    const query = {email: email};
    User.findOne(query, callback);
};
module.exports.get_user_by_login = function(id, callback) {
    User.findById(id, callback);
};

module.exports.add_user = function(new_user, callback) {
    crypt.genSalt(10, function(err, salt){
        crypt.hash(new_user.password, salt, function(err, hash){
           if(err) throw err;
           new_user.password = hash
            new_user.save(callback);
        });
    });
};

module.exports.compare_pass = function(passFromUser, userDBPass, callback){
    crypt.compare(passFromUser, userDBPass, function(err, isMatch){
        if(err)throw err;
        callback(null, isMatch);
    });
};