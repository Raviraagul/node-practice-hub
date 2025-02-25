const express = require("express");
const psql = require('../config/database');
const { json } = require("body-parser");

exports.bookList = function( req, res, next ){
    try{
        let sql = "Select * from books;"
        psql.query(sql, function( error, result ){
            if(error)
            {
                res.json ({"error": error});
            }
            else
            {
                let books = [];
                books = result.rows;
                res.json ({"books_list": books});
            }
        });
    } catch( error )
    {
        res.json ({"error": error});
    }
}