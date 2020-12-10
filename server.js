const express = require('express');

const app = express();

app.use(express.static('./dist/student-lence-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/student-lence-front/'}),
);

app.listen(process.env.PORT || 8080);