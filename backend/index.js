
const bookService = require('./services/bookService')
const userService = require('./services/userService')
const bookRouter = require('./routers/booksRouter')
const usersRouter = require('./routers/usersRouter')
const authRouter = require('./routers/authRouter')
const categoriesRouter = require('./routers/categoriesRouter');

const loggerMiddleware = require('./middlewares/loggerMiddleware')
const {authMiddleware} = require('./middlewares/authMiddleware')
const {isAdmin} = require('./middlewares/authrtizationMiddelware')
const connectDB = require('./config/db.config')
const express = require('express')
const cors = require('cors');
const app = express();

process.loadEnvFile();  //عشان اقدر استخدم .env

connectDB()
app.use('/imgs',express.static('./imgs'));//to access it by /imgs in front  //http://localhost:3000/imgs/1758604333462_4.jpg

//middlewares
app.use(cors());
app.use(express.json());

// app.use('/api/v1/books',bookRouter)
// app.use('/api/v1/users',usersRouter)
//apply  Middlewares
app.use(loggerMiddleware) //كدا هي علي مستوي الابليكيشن كله
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/books',bookRouter)
app.use('/api/v1/users',usersRouter)
app.use('/api/v1/categories', categoriesRouter);





















const port = 3000;

app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
})