/* Since the pg library does not natively support async/await when using callbacks, I decided to use models directly instead of controllers, making one of them unnecessary. 

You can use controllers with models if you're leveraging promises with the pg library or using an ORM like Sequelize for better abstraction and structure.*/

const express = require("express");
const books = require("../models/books");

exports.getAllBooks = async ( req, res ) => {
    try{
        const bookList = await books.bookList();
        res.json(books);
    } catch (error){
        res.json ({"error": error});
    }
};