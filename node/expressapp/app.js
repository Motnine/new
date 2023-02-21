// const express = require("express");

// const app = express();
// app.get("/", function (request, response) {
//   response.send("<h1>Главная страница</h1>");
// });
// app.get("/about", function (request, response) {
//   response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function (request, response) {
//   response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);

// const express = require("express");

// const app = express();
// app.use(function(request, response, next){

//     console.log("Middleware 1");
//     next();
// });
// app.use(function(request, response, next){

//     console.log("Middleware 2");
//     next();
// });

// app.get("/", function(request, response){

//     console.log("Route /");
//     response.send("Hello");
// });
// app.listen(3000);
// const express = require("express");
// const fs = require("fs");

// const app = express();
// app.use(function (request, response, next) {
//   let now = new Date();
//   let hour = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
//   console.log(data);
//   fs.appendFile("server.log", data + "\n", function () {});
//   next();
// });

// app.get("/", function (request, response) {
//   response.send("Hello");
// });
// app.listen(3000);

// const express = require("express");
// const app = express();

// app.use(function (request, response) {
//   response.send(`<!DOCTYPE html>
//   <html>
//   <head>
//       <title>Главная</title>
//       <meta charset="utf-8" />
//   </head>
//   <body>
//       <h1>Главная страница</h1>
//       <h3>Привет, Express</h3>
//   </body>
//   <html>`);
// });

// app.listen(3000);

// const express = require("express");
// const app = express();

// app.use(function (request, response) {
//   response.sendFile(__dirname + "/index.html");
// });

// app.listen(3000);

// const express = require("express");
// const app = express();

// app.use("/home/foo/bar",function (request, response) {
//   response.status(404).send(`Ресурс не найден`);
// });

// app.listen(3000);
// const express = require("express");

// const app = express();

// app.use("/static", express.static(__dirname + "/public"));

// app.use("/", function(request, response){

//     response.send("<h1>Главная страница</h1>");
// });

// app.listen(3000);

// const express = require("express");
// const app = express();

// // обработка запроса по адресу /about
// app.get("/about", function(request, response){

//     response.send("<h1>О сайте</h1>");
// });

// // обработка запроса по адресу /contact
// app.use("/contact", function(request, response){

//     response.send("<h1>Контакты</h1>");
// });

// // обработка запроса к корню веб-сайта
// app.get(/.*(\.)html$/, function (request, response) {
//     response.send(request.url)
// });
// app.listen(3000);

// const express = require("express");
// const app = express();

// app.use("/home/bar",function (request, response) {
//   response.redirect("/about")
// });
// app.use("/about", function (request, response) {
//   response.send("<h1>About</h1>");
// });
// app.use("/home/foo/bar",function (request, response) {
//     response.redirect("..")
//   });

// app.listen(3000);

// const express = require("express");

// const app = express();
// app.get("/", function(request, response){

//     response.send("<h1>Главная страница</h1>");
// });
// app.use("/about", function(request, response){

//     let id = request.query.id;
//     let userName = request.query.name;
//     response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
// });

// app.listen(3000);

// const express = require("express");

// const app = express();
// app.get("/", function(request, response){

//     response.send("<h1>Главная страница</h1>");
// });
// app.use("/about", function(request, response){

//     console.log(request.query);
//     let names = request.query.name;
//     let responseText = "<ul>";
//     for(let i=0; i < names.length; i++){
//         responseText += "<li>" + names[i] + "</li>";
//     }
//     responseText += "</ul>";
//     response.send(responseText);
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// app.use("/about", function (request, response) {
//   console.log(request.query);
//   let id = request.query.user.id;
//   let name = request.query.user.name;

//   response.send("<h3>id:" + id + "<br>name: " + name + "</h3>");
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// // создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({extended: false});

// app.get("/", function (request, response) {
//     response.sendFile(__dirname + "/index.html");
// });
// app.post("/", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });

// app.listen(3000, ()=>console.log("Сервер запущен..."));

// const express = require("express");
// const app = express();

// app.get("/products/:productId", function (request, response) {
//   response.send("productId: " + request.params["productId"]);
// });

// app.listen(3000);

// const express = require("express");
// const app = express();

// // определяем Router
// const productRouter = express.Router();

// // определяем маршруты и их обработчики внутри роутера
// productRouter.use("/create", function(request, response){
//   response.send("Добавление товара");
// });
// productRouter.use("/:id", function(request, response){
//   response.send(`Товар ${request.params.id}`);
// });
// productRouter.use("/", function(request, response){
//   response.send("Список товаров");
// });
// // сопотавляем роутер с конечной точкой "/products"
// app.use("/products", productRouter);

// app.use("/about", function (request, response) {
//   response.send("О сайте");
// });

// app.use("/", function (request, response) {
//   response.send("Главная страница");
// });
// app.listen(3000);

// const express = require("express");

// const app = express();
// // создаем парсер для данных в формате json
// const jsonParser = express.json();

// app.post("/user", jsonParser, function (request, response) {
//     console.log(request.body);
//     if(!request.body) return response.sendStatus(400);

//     response.json(request.body); // отправляем пришедший ответ обратно
// });

// app.get("/", function(request, response){

//     response.sendFile(__dirname + "/index.html");
// });

// app.listen(3000);

// const express = require("express");

// const app = express();
// app.set("view engine", "hbs");

// app.use("/contact", function(_, response){

//     response.render("contact.hbs", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// });

// app.use("/", function(_, response){

//     response.send("Главная страница");
// });
// app.listen(3000);
// const express = require("express");
// const hbs = require("hbs");
// const app = express();

// app.set("view engine", "hbs");
// hbs.registerPartials(__dirname + "/views/partials");

// app.use("/contact", function(request, response){

//     response.render("contact", {
//         title: "Мои контакты",
//         email: "gavgav@mycorp.com",
//         phone: "+1234567890"
//     });
// });

// app.use("/", function(request, response){

//     response.render("home.hbs");
// });
// app.listen(3000);

// const express = require("express");
// const expressHbs = require("express-handlebars");
// const hbs = require("hbs");
// const app = express();

// // устанавливаем настройки для файлов layout
// app.engine("hbs", expressHbs.engine(
//     {
//         layoutsDir: "views/layouts",
//         defaultLayout: "layout",
//         extname: "hbs"
//     }
// ))
// app.set("view engine", "hbs");
// hbs.registerPartials(__dirname + "/views/partials");

// app.use("/contact", function(_, response){

//     response.render("contact", {
//         title: "Мои контакты",
//         email: "gavgav@mycorp.com",
//         phone: "+1234567890"
//     });
// });

// app.use("/", function(_, response){

//     response.render("home.hbs");
// });
// app.listen(3000);

// const express = require("express");
// const hbs = require("hbs");

// const app = express();

// hbs.registerHelper("getTime", function(){

//     const myDate = new Date();
//     const hour = myDate.getHours();
//     let minute = myDate.getMinutes();
//     let second = myDate.getSeconds();
//     if (minute < 10) {
//         minute = "0" + minute;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }
//     return `Текущее время: ${hour}:${minute}:${second}`;
// });

// hbs.registerHelper("createStringList", function(array){

//     let result="";
//     for(let i=0; i<array.length; i++){
//         result +=`<li>${array[i]}</li>`;
//     }
//     return new hbs.SafeString(`<ul>${result}</ul>`);
// });

// app.set("view engine", "hbs");

// app.get("/", function(_, response){

//     response.render("home.hbs", {
//         fruit: [ "apple", "lemon", "banana", "grape"]
//     });
// });
// app.listen(3000);

// const express = require("express");

// const app = express();

// app.set("view engine", "ejs");

// app.use("/contact", function (request, response) {
//   response.render("contact", {
//     title: "Мои контакты",
//     emailsVisible: true,
//     emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//     phone: "+1234567890",
//   });
// });
// app.use("/", function (request, response) {
//   response.send("Главная страница");
// });
// app.listen(3000);

// const express = require("express");
  
// const app = express();
  
// app.set("view engine", "pug");
 
// app.use("/contact", function(request, response){
      
//     response.render("contact", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// }); 
 
// app.use("/", function(request, response){
      
//     response.send("Главная страница");
// });
// app.listen(3000);

const express = require("express");
  
const app = express();
  
app.set("view engine", "pug");
 
app.use("/contact", function(request, response){
      
    response.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
}); 
 
app.use("/", function(request, response){
      
    response.send("Главная страница");
});
app.listen(3000);
