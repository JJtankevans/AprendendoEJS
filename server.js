//Expess é usado para criar um servidor
const express = require('express');
//Instancia o exprexx
const app = express();

//Seta para usar o view engine que permite a renderização de HTML e usa o ejs para isso
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
})

app.get("/sobre", function (req, res) {
    res.render("about");
})

app.listen(8080);
console.log("Rodando");