require("dotenv").config();
const express = require("express"),
  app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const landing = require("./routes/landing");
app.use(landing);

app.listen(process.env.PORT, () => console.log("server started"));
