//require express
const express = require('express');
//para usar las rutas estaticas
const path = require('path'); 

const app = express();

//rutas estaticas
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) ); 
//escuchar navegador al servidor express
app.listen(3000, ()=> console.log("corriendo servidor con Express") );  

//app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname ,'./views/home.html')));
//app.get('/', (req, res) => res.sendFile(path.resolve(__dirname ,'./views/index.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname ,'./views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname ,'./views/registro.html')));


