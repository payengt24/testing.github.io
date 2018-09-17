const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //by default it know to look at the module

const musicList = require ('./public/modules/music')


const PORT = 5000; //don't want to hard code the PORT that's why we created a variable

app.use(express.static('server/public')); //this shows everything in the public folder in the localhost5000

app.use(bodyParser.urlencoded( { extended: true } ));

app.get('/musicGet', (req, res) => {
    console.log('reached')
    res.send(musicList);
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})