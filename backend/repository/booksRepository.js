const fileUtils = require("../utils/jsonFileUtils");
const BOOKS_FILE_PATH = "./data/books.json";

const getAll = () => {
  const allBooks = fileUtils.readJson(BOOKS_FILE_PATH);
  return allBooks;
}

// This will have a problem
const getById = (bookId) => {
  const allBooks = getAll();
  const targetBooks = allBooks.filter(({ id }) => bookId == id);
  return targetBooks[0];
}

const createBook = (newBook) => {
  // Get Array
  const allBooks = getAll();

  // Increment id's (or UUID)
  const newId = !allBooks ? 1 : allBooks[allBooks.length - 1].id + 1;

  const createdBook = { ...newBook, id: newId };

  // Push new book
  allBooks.push(createdBook);

  // Write new array
  fileUtils.writeJson(BOOKS_FILE_PATH, allBooks);

  // Return New Book
  return createdBook;
};

const updateBook = (id, updatedBook) => {
  // Get All
  const allBooks = getAll();

  // Update array
  const updatedBooks = allBooks.map((book) => book.id === id ? {
    ...updatedBook, id: book.id
  } : book);

  // Write new array
  fileUtils.writeJson(BOOKS_FILE_PATH, updatedBooks);

  return {...updatedBook, id};
}

const deleteBook = (id, updatedBook) => {
  // Get All
  const allBooks = getAll();
  const deletedBooks = allBooks.filter(book => book.id !== id);

  if (deletedBooks.length === allBooks.length) {
    return null;
  }

  fileUtils.writeJson(BOOKS_FILE_PATH, deletedBooks);
return { message: `Book with id ${id} deleted successfully` };







}


module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook
}