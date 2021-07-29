const mongoose = require('mongoose');

const Declaration_schema = mongoose.Schema({
    age: {
        type: Object,
    },
    description: {
        type: String,
    },
    info: {
        type: Object,
    },
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    value: {
        type: Number,
    },
    imgs: {
        type: Array,
    },
    owner :{
        type: Object
    },
    onlyMail: {
        type: Boolean,
    }
});

const Declaration = module.exports = mongoose.model('Declaration', Declaration_schema);
