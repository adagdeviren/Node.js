'use strict';

// Party Time (a program that makes a reservation for the biggest party on the planet and prints the response.)

const nodeFetch = require('node-fetch');

const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';

const headers = {
    "Content-Type": "application/json",
};

const body = JSON.stringify( {
    "name": "Chuck Norris",
    "numberOfPeople": 4
});

nodeFetch(url, { method: 'POST', headers: headers, body:body })
    .then((res) => {
        return res.text() // response body
    })
    .then((data) => {
        console.log(data);
    })
    .catch(err => console.log(err));