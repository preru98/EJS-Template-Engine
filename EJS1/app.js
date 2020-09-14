const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
// app.set('views', path.join(__dirname, 'views'));  //static files host
app.use(express.static('views'));                    //view engine setup
app.set('view engine', 'ejs');                  

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

module.exports = app;