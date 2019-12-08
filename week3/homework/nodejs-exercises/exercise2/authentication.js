'use strict';

// Authentication
const nodeFetch = require('node-fetch');

const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';

nodeFetch(url, { method: 'GET', headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' } })
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        console.log(json);
    })
    .catch(err => console.log(err));

    // Bonus part encoding username and password to base64 using javascript code
    const credentials = 'admin:hvgX8KlVEa';
    const encodedCredentials = Buffer.from('admin:hvgX8KlVEa', 'binary').toString('base64');
    console.log('===BONUS PART=== \n encoded version of credetentials => ' + encodedCredentials + '\n===END OF BONUS PART===\n');