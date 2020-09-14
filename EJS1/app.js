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
    let posts = [
        {
            title : "Water Bay",
            author : "Pi Sharma",
            description : "Lorem Ipsum Water ..."
        },
        {
            title : "Sun Warm",
            author : "Hihello",
            description : "Lorem Ipsum Sun ..."
        },
        {
            title : "Moon Docomo",
            author : "Couver",
            description : "Lorem Ipsum Moon ..."
        }
    ];
    let tagline = "Admire nature to the fullest, being beautiful ...";
    res.render('pages/index', {
        posts : posts,
        tagline : tagline
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

module.exports = app;