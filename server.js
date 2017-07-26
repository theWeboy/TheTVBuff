/**
 * Created by devdeepak on 25/7/17.
 */
var express = require('express');
var sql = require('./db.js');
var path = require('path');

var port = 2000 || process.env.port;
var bodyParser = require('body-parser');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,"views"));


app.use('/',express.static(__dirname+'/public_static'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',index);
app.use('/users',users);

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public_static/home.html');
});



app.get('/users/get',function(req,res) {
    sql.get(function(data) {
        console.log(data);
    });
});
app.post('/users/post',function (req,res) {
    console.log(req.body);
    console.log("Successful post request");
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    sql.insert(username,email,password,function (data) {
        res.send(data);
    })
});




//handlebars default config

const hbs = require('hbs');
const fs = require('fs');

const partialsDir = __dirname + '/views/partials';

const filenames = fs.readdirSync(partialsDir);

filenames.forEach(function (filename) {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
        return;
    }
    const name = matches[1];
    const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
    hbs.registerPartial(name, template);
});

hbs.registerHelper('json', function(context) {
    return JSON.stringify(context, null, 2);
});


//Run server

app.listen(port, function(){
    console.log("Server is listening at port 2000");
});

module.exports = app;