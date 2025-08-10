var express = require('express');
var app = express();

// ✅ Comente ou remova a rota anterior
// app.get("/", function(req, res) {
//   res.send("Hello Express");
// });

// ✅ Envie o arquivo index.html
app.get("/", function(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

module.exports = app;
