// // получаем модуль Express
// const express = require("express");
// // создаем приложение
// const app = express();

// // устанавливаем обработчик для маршрута "/"
// app.get("/", function (request, response) {
//   response.end("Hello from Express!");
// });
// // начинаем прослушивание подключений на 3000 порту
// app.listen(3000);
//

//

//

// let name = process.argv[2];
// let age = process.argv[3];

// console.log("name: " + name);
// console.log("age: " + age);
//
//
//
// const http = require("http");

// let message = "Здраствувуй!";
// http
//   .createServer(function (request, response) {
//     console.log(message);
//     response.end(message);
//   })
//   .listen(3000, "127.0.0.1", () => {
//     console.log("Сервер начал прослушивание запросов");
//   });
//
//
//
// function displaySync(data) {
//   console.log(data);
// }

// console.log("Начало работы программы");

// displaySync("Обработка данных...");

// console.log("Завершение работы программы");
//
//
// function display(data, callback) {
//   // с помощью случайного числа определяем ошибку
//   var randInt = Math.random() * (10 - 1) + 1;
//   var err = randInt > 5 ? new Error("Ошибка выполнения. randInt больше 5") : null;

//   setTimeout(function () {
//     callback(err, data);
//   }, 0);
// }

// console.log("Начало работы программы");

// display("Обработка данных...", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

// console.log("Завершение работы программы");
// //
// //
// //
// display("Обработка данных...", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

// function displaySync(callback){
//     callback();
// }

// console.log("Начало работы программы");

// setTimeout(function(){

//         console.log("timeout 500");
// }, 500);

// setTimeout(function(){

//         console.log("timeout 100");
// }, 100);

// displaySync(function(){console.log("without timeout")});
// console.log("Завершение работы программы");
// const fs = require("fs");

// // асинхронное чтение
// fs.readFile("hello.txt", "utf8", function (error, data) {
//   console.log("Асинхронное чтение файла");
//   if (error) throw error; // если возникла ошибка
//   console.log(data); // выводим считанные данные
// });
// // синхронное чтение
// console.log("Синхронное чтение файла");
// let fileContent = fs.readFileSync("hello.txt", "utf8");
// console.log(fileContent);

// const fs = require("fs");

// fs.appendFileSync("hello.txt", "Привет ми ми ми!");

// fs.appendFile("hello.txt", "Привет МИД!", function (error) {
//   if (error) throw error; // если возникла ошибка

//   console.log("Запись файла завершена. Содержимое файла:");
//   let data = fs.readFileSync("hello.txt", "utf8");
//   console.log(data); // выводим считанные данные
// });

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function () {
//   console.log("Hello all!");
// });

// emitter.on(eventName, function () {
//   console.log("Привет!");
// });

// emitter.emit(eventName);

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function (data) {
//   console.log(data);
// });

// emitter.emit(eventName, "Привет пир!");

// const util = require("util");
// const EventEmitter = require("events");

// function User() {}
// util.inherits(User, EventEmitter);

// let eventName = "greet";
// User.prototype.sayHi = function (data) {
//   this.emit(eventName, data);
// };
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function (data) {
//   console.log(data);
// });

// user.sayHi("Мне нужна твоя одежда...");

// const EventEmitter = require("events");

// let eventName = "greet";

// class User extends EventEmitter {
//   sayHi(data) {
//     this.emit(eventName, data);
//   }
// }

// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function (data) {
//   console.log(data);
// });

// user.sayHi("Мне нужна твоя одежда...");

// const fs = require("fs");

// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!");
// writeableStream.write("Продолжение записи \n");
// writeableStream.end("ZAVERSHENIE");
// let readableStream = fs.createReadStream("some.txt", "utf8");

// readableStream.on("data", function (chunk) {
//   console.log(chunk);
// });

// const fs = require("fs");

// let readableStream = fs.createReadStream("hello.txt", "utf8");

// let writeableStream = fs.createWriteStream("some.txt");

// readableStream.on("data", function(chunk){
//     writeableStream.write(chunk);
// });

//                                                           3 ГЛАВАААААААААААААААААААААААААААА!

// const http = require("http");

// http.createServer().listen(3000);

// const http = require("http");

// http.createServer(function(request, response){

//     response.end("Hello world!");
// }).listen(3000);

// var http = require("http");

// http
//   .createServer(function (request, response) {
//     console.log("Url: " + request.url);
//     console.log("Тип запроса: " + request.method);
//     console.log("User-Agent: " + request.headers["user-agent"]);
//     console.log("Все заголовки");
//     console.log(request.headers);

//     response.end();
//   })
//   .listen(3000);

// const http = require("http");

// http
//   .createServer(function (request, response) {
//     response.setHeader("UserId", 12);
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
//     response.write("<h2>hello world</h2>");
//     response.end();
//   })
//   .listen(3000);

// const http = require("http");

// http.createServer(function(request, response){

//     response.setHeader("Content-Type", "text/html");
//     response.write("<!DOCTYPE html>");
//     response.write("<html>");
//     response.write("<head>");
//     response.write("<title>Hello Node.js</title>");
//     response.write("<meta charset=\"utf-8\" />");
//     response.write("</head>");
//     response.write("<body><h2>Привет миг</h2></body>");
//     response.write("</html>");
//     response.end();
// }).listen(3000);

// const http = require("http");

// http
//   .createServer(function (request, response) {
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");

//     if (request.url === "/home" || request.url === "/") {
//       response.write("<h2>Home</h2>");
//     } else if (request.url == "/about") {
//       response.write("<h2>About</h2>");
//     } else if (request.url == "/contact") {
//       response.write("<h2>Contacts</h2>");
//     } else {
//       response.write("<h2>Not found</h2>");
//     }
//     response.end();
//   })
//   .listen(3000);

// const http = require("http");

// http.createServer(function(request, response){

//     response.setHeader("Content-Type", "text/html; charset=utf-8;");

//     if(request.url === "/"){
//         response.statusCode = 302; // временная переадресация
//         // на адрес localhost:3000/newpage
//         response.setHeader("Location", "/newpage");
//     }
//     else if(request.url == "/newpage"){
//         response.write("New address");
//     }
//     else{
//         response.statusCode = 404; // адрес не найден
//         response.write("Not Found");
//     }
//     response.end();
// }).listen(3000e);

// const http = require("http");
// const fs = require("fs");

// http.createServer(function(request, response){

//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     // смотрим, есть ли такой файл
//     fs.access(filePath, fs.constants.R_OK, err => {
//         // если произошла ошибка - отправляем статусный код 404
//         if(err){
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }
//         else{
//             fs.createReadStream(filePath).pipe(response);
//         }
//       });
// }).listen(3000, function(){
//     console.log("Server started at 3000");
// });

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer(function (request, response) {
//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, function (error, data) {
//       if (error) {
//         response.statusCode = 404;
//         response.end("Resourse not found!");
//       } else {
//         response.end(data);
//       }
//     });
//   })
//   .listen(3000, function () {
//     console.log("Server started at 3000");
//   });

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer((request, response) => {
//     if (request.url === "/user") {
//       let data = "";
//       request.on("data", (chunk) => {
//         data += chunk;
//       });
//       request.on("end", () => {
//         console.log(data);
//         response.end("Данные успешно получены");
//       });
//     } else {
//       fs.readFile("index.html", (error, data) => response.end(data));
//     }
//   })
//   .listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));

// const http = require("http");
// const fs = require("fs");

// http.createServer(async (request, response) => {

//      if (request.url === "/user") {

//         const buffers = []; // буфер для получаемых данных

//         for await (const chunk of request) {
//             buffers.push(chunk);        // добавляем в буфер все полученные данные
//         }

//         const data = Buffer.concat(buffers).toString();
//         console.log(data);
//         response.end("Данные успешно получены");
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer(async (request, response) => {
//     if (request.url === "/user") {
//       const buffers = []; // буфер для получаемых данных

//       for await (const chunk of request) {
//         buffers.push(chunk); // добавляем в буфер все полученные данные
//       }

//       const user = JSON.parse(Buffer.concat(buffers).toString());
//       console.log(user.name, "-", user.age);
//       response.end("Данные успешно получены");
//     } else {
//       fs.readFile("index.html", (error, data) => response.end(data));
//     }
//   })
//   .listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));

// const http = require("http");
// const fs = require("fs");

// http.createServer(function(request, response){

//     fs.readFile("index.html", "utf8", function(error, data){

//         let message = "Изучаем Node.js";
//         let header = "Главная страница";
//         data = data.replace("{header}", header).replace("{message}", message);
//         response.end(data);
//     })
// }).listen(3000);

