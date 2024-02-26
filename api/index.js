const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Crear la aplicación express
const app = express();
const port = 3000;

// Usar CORS para permitir solicitudes de otros dominios
app.use(cors());

// Configurar body-parser para analizar los cuerpos de las solicitudes POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect("mongodb+srv://grupooperativo84:QVsgqSH75aHJyNmi@vitalia.qaqiuht.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Connected to mongodb uwu");
}).catch((error) => {
    console.log("Error connecting to mongodb unu", error);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
