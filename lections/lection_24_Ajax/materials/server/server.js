var express = require("express");
// var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
const { read, write } = require('./helper/');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


app.get("/users", function (req, responce) {
  read("./models/data.json", (error, jsonPayload) => {
    const {maxAge, minAge} = req.query;

    if (maxAge && minAge) {
      let users = JSON.parse(jsonPayload);

      responce
      .status(200)
      .send(users.filter(({ age }) =>  (age < maxAge && age > minAge)))
      .json();
      
      return;
    }

    responce
    .status(200)
    .send(jsonPayload)

  });
});



app.post("/registration", function (req, responce) {
  const body = req.body;

  read("./models/data.json", (error, jsonPayload) => {
    const data = JSON.parse(jsonPayload);
    data.push(JSON.parse(body));


    if (jsonPayload) {
      write("./models/data.json", data);
      responce.send('ok')
    }

  });

});



const port = 3005;

app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});
