// const booksRepo = require('../repository/booksRepository')
const booksRepo = require('../repository/mongoBooksRepository')
//{} is default
const getBooksQuery = (filter = {}) => {
  return booksRepo.findBooks(filter); 
};

const countBooks = async (filter = {}) => {
  return await booksRepo.countBooks(filter);
};

const getAllBooks=async()=>{
    return await booksRepo.getAll()
}

const addBook=async(newBook)=>{
    return await booksRepo.createBook(newBook)
}

const updateBook=async(id,update)=>{
    const existingBook = booksRepo.getById(id);
    if (!existingBook) 
    {
        throw Error("Book not found!");
    }

    return await booksRepo.updateBook(id,update)
}

const getBookById=async(id)=>{
    const existingBook = booksRepo.getById(id);
    if (!existingBook) 
    {
        throw Error("Book not found!");
    }

    return await booksRepo.getById(id)
}


const deleteBookById =async(id)=>{
    const existingBook = booksRepo.getById(id);
    if (!existingBook) 
    {
        throw Error("Book not found!");
    }

    return await booksRepo.deleteBook(id)
}

module.exports = {
    getBooksQuery,
    countBooks,
    getAllBooks,
    addBook,
    updateBook,
    getBookById,
    deleteBookById 
}