const express = require ("express");
const path = require ("path");

const app = express ();

const publicPath =path.resolve(__dirname, "./public")

app.use(express.static(publicPath));

//const express = require ("express");
//const path = require ("path");

//const app = express ();

//app.use(express.static("public"));



app.get ("/" , (req , res) => {res.sendFile(path.resolve ("./Views/home.html"))})

app.listen (4000, ()=>console.log ("servidor en puerto 4000"))