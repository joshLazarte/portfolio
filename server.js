require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/contact', require('./routes/contact'));
app.use('/downloads', require('./routes/downloads'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/build/index.html'));
});

app.listen(process.env.PORT, () => console.log('server started'));
