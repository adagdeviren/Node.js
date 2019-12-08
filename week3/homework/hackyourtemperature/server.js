'use strict'

const express = require('express');
const expressHandlebars = require('express-handlebars');
const axios = require('axios');
const app = express();
const port = 3000;
const apiKey = require('./sources/keys.json').API_KEY;


app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'));

app.use(express.urlencoded({ extended: true }));

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    axios(`https://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${cityName}&units=metric`)
        .then(response => {
            res.render("index", {
                weatherText: `It's ${response.data.main.temp} °C in ${cityName} `
            });
        })
        .catch(() => {
            res.render("index", { weatherText: "City is not found!" });
        })

});


app.listen(port, () => console.log(`hackyourtemperature app is listening on port ${port}!`));