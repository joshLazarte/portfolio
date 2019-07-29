require("dotenv").config();
const express = require("express"),
    app = express(),
    bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const landing = require("./routes/landing");
const contact = require("./routes/contact");
app.use(landing);
app.use('/contact', contact);

app.listen(process.env.PORT, () => console.log("server started"));
