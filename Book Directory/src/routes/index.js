const express = require("express");
const router = express.Router();

// console.log("Entered Routes/index.js"); // This runs immediately when the file is required

/* Since the pg library does not natively support async/await when using callbacks, I decided to use models directly instead of controllers, making one of them unnecessary. 

You can use controllers with models if you're leveraging promises with the pg library or using an ORM like Sequelize for better abstraction and structure.*/

const book = require("../models/books");

router.get("/books", book.bookList); 
router.post("/add-book", book.addBook);



module.exports = router;