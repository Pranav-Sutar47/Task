const BookModel = require("../Models/Book.model");
const APIError = require("../Utils/APIError");
const APIResponse = require("../Utils/APIResponse");
const asyncHandler = require("../Utils/asyncHandler");

const getBooks = asyncHandler(async(req,res)=>{
    const books = await BookModel.find();
    return res.status(200).json(new APIResponse(200,books,'All books'));
});

const addBook = asyncHandler(async(req,res)=>{
    const {title,authorName,year,category} = req.body;
    const newBook = await BookModel.create({
        title,
        authorName,
        year,
        category
    });
    await newBook.save();

    return res.status(201).json(new APIResponse(201,newBook,'Book added successfully'));
});

const updateBook = asyncHandler(async(req,res)=>{
    const {id} = req.query;
    const {title,authorName,year,category} = req.body;
    const book = await BookModel.findById(id);

    if(!book)
        throw new APIError(404,'Book not found');
    if(title)
        book.title = title;
    if(authorName)
        book.authorName = authorName;
    if(year)
        book.year = year;
    if(category)
        book.category = category;
   
    return res.status(200).json(new APIResponse(200,book,'Updated successfully'));
});

const deleteBook = asyncHandler(async(req,res)=>{
    const {id} = req.query;
    const result = await BookModel.findByIdAndDelete(id);
    if(result)
        return res.status(204).json(new APIResponse(204,'Book deleted successfully'));
    else
        throw new APIError(404,'Error occured while deleting book');
});

module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook
};