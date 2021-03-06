var express = require("express");
//create app
var app = express();
const PORT = process.env.PORT || 3200;
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto']=='http'){
    next();
  }else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("Express Server is running on port " + PORT);
});
