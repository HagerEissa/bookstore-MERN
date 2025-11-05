const bookModel = require('../models/book.model');


const findBooks = (filter) => {
  return bookModel.find(filter).populate('category', 'name');
};

const countBooks = async (filter) => {
  return await bookModel.countDocuments(filter);
};


//to get all books
const getAll = async() => {
  return await bookModel.find().populate('category', 'name');
}


const getById = async(bookId) => {
  return await bookModel.findById(bookId).populate('category', 'name');
}

const createBook = async(newBook) => {
  return await bookModel.create(newBook)
};

const updateBook = async(id, updatedBook) => {
    const book = await bookModel.findByIdAndUpdate(id,updatedBook,{ new: true })
    if (!book) {
        throw new Error('book not found')
    }   
  
    return book;
}

const deleteBook = async(id) => {
    const book = await bookModel.findByIdAndDelete(id)
    if (!book) {
        throw new Error('book not found')
    }   
  
    return book;

}


module.exports = {
  findBooks,
  countBooks,
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook
}