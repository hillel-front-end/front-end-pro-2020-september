var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs
var Person = require('./models/Person');

console.log(Person, 'Person');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true); next();
});


const port = 3005;

// запусть наше nodeJs приложении на порту 3002 по адресу http://localhost:3002/
/* 
 теперь мы знаем куда мы можем обращаться к нашей nodeJS программе
 чтоб получить данные.
 (по адресу) http://localhost:3000/. 
 
*/
app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});

// app.get("/users", function (req, responce) {
//   //req - информация по запросу, с какой инф постучались на сервер
//   //response - объект который хранит в себе инструменты для того 
//   //чтоб мы могли ответить на запрос с которым постучались
//   console.log(req.params, "req.params");

//   fs.readFile("./models/user.json", "utf-8", (error, jsonPayload) => {
//     console.log(jsonPayload, 'jsonPayLoad');
//     responce.send(jsonPayload);
//   });
// });  



/*
 статусы (res.status(200) - говорят о том как совершился запрос, положиельно(получили необходимые данные) или 
 негативно(что то пошло не так).
 200 - все прошло ок
 404- что то не найдено
 (https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP)
*/

//http://localhost:3000/all-users (GET)

// app.get("/user", function (req, res) {});

// /*
// '/user/:id' - при запросе http://localhost:3000/user/123, мы можем получить значение :id 
//  как свойство обьекта req.params -> req.params.id == 123
//  Если бы было '/user/:foo', то req.params.foo == 123
// */
// app.get("/user/id", function (req, res) {});

// // Получить список всех пользователей
// function getAllusers(req, res) {
//   // res.status(200);
//   // res.send({content: 123});
// }

//GET Получить юзера по id (data) \ params, query

//http://localhost:3000/registration (post)
const url = './json-data/data.json';

app.post("/registration", function (req, res) {
  // const 
  // console.log(typeof req.body, 'req.body');
  const personInfo = req.body;

  fs.readFile(url, 'utf-8', function(error, json) {
    const data = JSON.parse(json)
    const person = new Person(personInfo, data.length);
    
    data.push(person);

    fs.writeFile(url, JSON.stringify(data), (error) => console.log(error));

    res.send('ok');
  });

});

//http://localhost:3000/registration (get)

app.get("/step-reg", function (req, res) {
  const value = Math.floor(Math.random() * 50);
  const data = {
    status: (value % 2 === 0)
  }

  res.send(data).json();

});