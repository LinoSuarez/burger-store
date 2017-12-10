var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();
var port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.static('public'))

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(port);


// var routes = require("./controllers/burger_controller.js");

// app.use("/", routes);
// app.use(express.static("public"));

// app.use('/assets', express.static(path.join(__dirname, 'assets')))
// app.get("/", function(req, res) {

//       res.render("index", "");

//   });
