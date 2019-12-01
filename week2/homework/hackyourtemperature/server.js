'use strict'

const express = require('express');
const expressHandlebars = require('express-handlebars');
const axios = require('axios');
const app = express();
const port = 3000;

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index') );

app.use(express.urlencoded({extended: true }));

app.post('/weather', (req,res) => {
    const cityName = req.body.cityName;
    res.send({cityName});
} );


app.listen(port, () => console.log(`hackyourtemperature app is listening on port ${port}!`));