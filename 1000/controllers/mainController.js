const express = require ("express");
const path = require ("path");
const mainController = {

    //index:(req,res)=>{
        //res.render(path.resolve('./views/home.ejs'))},
    
    index:(req,res)=>{
        res.render('home')},

    register:(req,res)=>{
        res.render('register')},

    login: (req,res)=>{
        res.render('login')},

    //COMENTAR

    list: (req,res)=>{
        let users=[
            {id:1, name:"Dario"},
            {id:2, name:"Ale"},
            {id:3, name:"Javier"},
            {id:4, name:"Maru"}
        ];
        res.render('userList', {'users': users})},

    notFound:(req, res) => {
        res.render("Error página no encontrada", 404);
}
}

module.exports = mainController;