const express = require ("express");

//const path = require ("path");

const app = express ();

//const publicPath =path.resolve(__dirname, "./public")

app.use(express.static("Public"));

//app.use(express.static(publicPath));

//app.get ("/", (req,res)=> {
//let htmlPath = path.resolve (__dirname, "./views/index.html");
//res.sendFile(htmlPath)
//});

app.listen (1000, ()=>console.log ("Servidor en puerto 1000"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/404', (req,res)=>{
    res.send("Error pagina no encontrada", 404);
});

//res.sendFile ("./views/index.html"))

//app.get ("/contacto", (req,res)=>res.send ("¡Dejanos tu contacto!"));

//app.get ("/un-array", (req,res)=>res.send ([1,2,3,4]));

//app.get ("/un-objeto", (req,res)=>res.send ({name:"Emanuel"}))

