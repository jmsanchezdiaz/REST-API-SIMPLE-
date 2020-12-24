//Importamos Modulos, Express, Postgres-Promises.
const express = require('express');
const app = express();
const colors = require('colors');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./routes/routes'));
app.use(express.static('public'));

//Abrimos escucha del servidor en el puerto 5000
app.listen(5000,()=> console.log('Server on '.rainbow, 5000));