const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/data_base');
const owner= require('./routes/user')

const app = express();
const port = 3000;

app.use(passport.initialize());
app.use(passport.session());

require('./config/pass')(passport);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'project')));

mongoose.connect(config.data_base, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function(){
    console.log('Все четко')
});
mongoose.connection.on('error', function(err){
    console.log(' херня какаета' + err)
});

app.get('/', function(req, res){
    res.send('Главная')
});
app.get('/owner', passport.authenticate('jwt', {session: false}) , function(req, res){
    res.send('Овгнер')
});
app.use('/owner', owner);

app.listen(port, function() {
    console.log("Сервак на порте: " + port);
});