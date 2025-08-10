require('dotenv').config();
var express = require('express');
var app = express();

// Comente ou remova a rota anterior
// app.get("/", function(req, res) {
//   res.send("Hello Express");
// });

// Envie o arquivo index.html
//app.get("/", function(req, res) {
//  const absolutePath = __dirname + "/views/index.html";
//  res.sendFile(absolutePath);
//});

// Middleware para servir arquivos estáticos
//app.use("/public", express.static(__dirname + "/public"));

// Rota JSON
//app.get("/json", function(req, res) {
//  res.json({ message: "Hello json" });
//});

//app.get("/json", function(req, res) {
// let message = "Hello json";

 // if (process.env.MESSAGE_STYLE === "uppercase") {
 //   message = message.toUpperCase();
 // }

 // res.json({ message: message });
//});

// Middleware de log
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Exemplo de rota
app.get("/json", function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});


