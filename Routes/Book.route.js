const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('../Controllers/Book.controller');

const router  = express.Router();

router.route('/').get(getBooks);

router.route('/').post(addBook);

router.route('/').put(updateBook);

router.route('/').delete(deleteBook);

module.exports = router;