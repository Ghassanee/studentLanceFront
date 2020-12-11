const express = require('express');

const app = express();

app.use(express.static('./dist/studentLanceFront'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/studentLanceFront/'}),
);

app.listen(process.env.PORT || 8080);