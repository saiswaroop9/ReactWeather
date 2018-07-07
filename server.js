var express = require("express");
//create app
var app = express();

app.use(express.static("public"));

app.listen(3200, function() {
  console.log("Express Server is running on 3200");
})
