require('dotenv').config();
let express = require('express');
let app = express();

// Root level logger middleware (tem que estar aqui no topo)
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Middleware para arquivos estáticos
app.use("/public", express.static(__dirname + "/public"));

// Rota /json
app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;
