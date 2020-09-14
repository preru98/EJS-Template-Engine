const express = require('express');
const logger = require('morgan');
const Mustache = require('mustache');

const app = express();

app.use(logger('dev'));
// app.use(express.static('views'));
app.set('view engine', 'mustache');
// app.register(".mustache", require('stache'));

app.get('/', (req, res) => {
    let tagline = "Admire nature to the fullest, being beautiful ...";
    let output = Mustache.render('<h2>Prerna {{tagline}}</h2>', {
        tagline : tagline
    });
    res.set('Content-Type','text/html');
    res.send(output);
    // console.log(output);
});




module.exports = app;



