const express = require('express');
const router = express.Router();
const bookService = require('../services/bookService');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/authrtizationMiddelware');
const upload = require('../config/multerConfig');



//get all books with Sort,Search,Pagination
router.get('/',async(req,res)=>{
    try {
        let { q, sort, page, limit } = req.query;
        //default
        page = Number(page) || 1;
        limit = Number(limit) || 10;
        let queryFilter = {};

        if (q && q !== 'null') {
            queryFilter.$or = [
                { title: { $regex: ".*" + q + ".*", $options: 'i' } },
                { description: { $regex: ".*" + q + ".*", $options: 'i' } }
            ];
        }

        let booksQuery = bookService.getBooksQuery(queryFilter);

        if (sort) {
            let sortOption = {};
            if (sort.startsWith('-')) {
                sortOption[sort.substring(1)] = -1;
            } else {
                sortOption[sort] = 1;
            }
            booksQuery = booksQuery.sort(sortOption);
        }

        const totalBooks = await bookService.countBooks(queryFilter);
        const books = await booksQuery
        .skip((page - 1) * limit)
        .limit(limit);

        res.status(200).json({
        page,
        limit,
        totalBooks,
        totalPages: Math.ceil(totalBooks / limit),
        data: books
        });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
)

//get one book by id
router.get('/:id',async(req,res)=>{
let id = req.params.id;
    // console.log(id);
    if(!id){
        res.status(404).send('not found')
        return
    }
    const myBook = await bookService.getBookById(id);
    if(!myBook){
        res.status(404).send('not found')
        return
    }
    res.send(myBook)
})


router.post('/',authMiddleware,upload.single('bookCoverImage'),async(req,res)=>{
    req.body.bookCoverImage = req.file.filename;
    let newBook = {
        ...req.body,
        createdBy: req.user.id  
    };
    if (!req.body.title) {
        return res.status(400).json({ message: "Title is required" });
    }
    if (req.body.price < 0) {
    return res.status(400).json({ message: "Price must be >= 0" });
    }
    const createdBook = await bookService.addBook(newBook);
    res.send(createdBook)
})

//update one book by id by (owner or admin)
router.put('/:id',authMiddleware,upload.single('bookCoverImage'),async(req,res)=>{
    if(req.file){
        req.body.bookCoverImage = req.file.filename;
    }
    let id = req.params.id;
    let updates = req.body;
    console.log(id);
    const book = await bookService.getBookById(id);
    if(!book){
        res.status(404).send('book not found')
        return
    }
    if (req.user.role_id !== 'admin' && book.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not allowed" });
        }
    if (!req.body.title) {
        return res.status(400).json({ message: "Title is required" });
    }
    if (req.body.price < 0) {
    return res.status(400).json({ message: "Price must be >= 0" });
    }
    const updatedBook =await bookService.updateBook(id,updates)
    res.send(updatedBook)
})



//delete one book by id
router.delete('/:id',authMiddleware,async(req,res)=>{
let id = req.params.id;
    // console.log(id);
    
    const book = await bookService.getBookById(id);
    if(!book){
        res.status(404).send('book not found')
        return
    }
    if (req.user.role_id !== 'admin' && book.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not allowed" });
    }
    const myBook = await bookService.deleteBookById(id);
    if(!myBook){
        res.status(404).send('not found')
        return
    }
    res.send(myBook)
})


module.exports = router;