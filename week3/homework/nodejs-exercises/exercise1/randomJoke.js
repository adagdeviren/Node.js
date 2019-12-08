'use strict';

// Random Chuck Norris Jokes

const nodeFetch = require('node-fetch');

var url = 'http://api.icndb.com/jokes/random/';

nodeFetch(url, { method: 'GET' })
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        console.log(json.value.joke);
    })
    .catch(err => console.log(err));