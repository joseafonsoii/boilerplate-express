let express = require('express');
let app = express();



// Adicione essa linha:
app.get("/", function(req, res) {
 res.send("Hello Express");
});

module.exports = app;




































 module.exports = app;
