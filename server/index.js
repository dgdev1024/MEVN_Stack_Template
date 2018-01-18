const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${server.address().port}. . .`);
});