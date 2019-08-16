require("dotenv").config();
const express = require("express"),
  app = express(),
  sessionConfig = require("./config/session"),
  bodyParser = require("body-parser"),
  flash = require("connect-flash"),
  messages = require("./config/messages"),
  path = require("path");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sessionConfig);
app.use(flash());
app.use(messages);
app.use(require("./routes/landing"));
app.use("/contact", require("./routes/contact"));
app.use("/downloads", require("./routes/downloads"));

app.get('/new', (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});

app.listen(process.env.PORT, () => console.log("server started"));
