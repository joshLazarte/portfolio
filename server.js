require("dotenv").config();
const express = require("express"),
  app = express(),
  sessionConfig = require("./config/session"),
  bodyParser = require("body-parser"),
  flash = require("connect-flash"),
  messages = require("./config/messages");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sessionConfig);
app.use(flash());
app.use(messages);

const landing = require("./routes/landing");
const contact = require("./routes/contact");
const downloads = require("./routes/downloads");
app.use(landing);
app.use("/contact", contact);
app.use("/downloads", downloads);

app.listen(process.env.PORT, () => console.log("server started"));
