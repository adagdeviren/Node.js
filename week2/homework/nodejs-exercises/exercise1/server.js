'use strict'

const express = require('express');

const app = express();
const PORT = 3000;



app.use(express.json()); // for parsing in request body

// methods/routes
const fs = require("fs");
app.post('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    const { title, content } = req.body;
    fs.writeFileSync(title, content);
    res.end('ok')
});

app.put('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    const { title, content } = req.body;

    if (fs.existsSync(title)) {
        fs.writeFileSync(title, content);
        res.end('ok')
    }
    else {
        res.end('post does not exist');
    }
});

app.delete('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    const title = req.params.title;
    fs.unlinkSync(title);
    res.end('ok');
});

app.get('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    const title = req.params.title;
    res.sendfile(title);
});


app.listen(PORT, () => {

    console.log('Server started on port ' + PORT);
});