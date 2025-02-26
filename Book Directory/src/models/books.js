const psql = require('../config/database');

exports.bookList = function( req, res, next ){
    try{
        let sql = "Select * from books;"
        // console.log("DEBUG: SQL Query =", sql);

        psql.query(sql, function( error, result ){
            if(error)
            {
                res.json ({"Query Error List: ": error});
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
        res.json ({"Catch Error: ": error});
    }
};

exports.addBook = function( req, res, next ){
    try{
        let title = req.body.title;
        let author = req.body.author;
        let isbn = req.body.isbn;

        const sql = "insert into books(title, author, isbn) values ('"+title+"', '"+author+"', '"+isbn+"') returning id;";

        psql.query(sql, function( error, result ){
            if(error)
            {
                res.json ({"Query Error Add: ": error});
            }
            else
            {
                let bookId = result.rows[0].id;
                res.json ({"Message": "Added Successfully","ID": bookId});
            }
        });
    } catch(error )
    {
        res.json ({"Catch Error Add": error});
    }
};

exports.updateBook = function( req, res, next ){
    try{
        let id = req.body.bookId;
        let title = req.body.title;
        let author = req.body.author;
        let isbn = req.body.isbn;

        const sql = "update books set title = '"+title+"' and author = '"+author+"' and isbn = '"+isbn+"' where id = '"+id+"';";

        psql.query(sql, function( error, result ){
            if(error)
            {
                res.json ({"Query Error Update: ": error});
            }
            else
            {
                res.json ({"Message": "Updated Successfully","ID": bookId});
            }
        });
    } catch(error )
    {
        res.json ({"Catch Error Update": error});
    }
};