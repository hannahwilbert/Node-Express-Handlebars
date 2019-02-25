// Dependencies

// Serve static content for the app from the "public" directory in the application directory.

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static("public"));
var PORT = process.env.PORT || 3000; 


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use(routes);

app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});