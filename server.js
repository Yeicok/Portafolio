const express = require('express');

const app = express();

app.use(express.static('./dist/portafolio'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/portafolio/'}),
);

app.listen(process.env.PORT || 8080);