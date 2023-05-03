const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config.js");

//Crear express app
const app = express();

//Base Datos
dbConnection();

app.use(express.static("public"));

const bodyParser = require("body-parser");

// create application/json parser

//Rutas
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth"));

//Escuchar en puerto 4000
app.listen(process.env.PORT, () => {
  console.log("Servidor correindo en puerto", process.env.PORT);
});
