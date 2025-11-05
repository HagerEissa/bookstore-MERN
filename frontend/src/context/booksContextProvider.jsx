import React, { createContext, useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';



export const booksContext=createContext()
const BooksContextProvider = ({children}) => {

    const [books,setBooks]=useState([])

    useEffect(()=>{
            axiosClient.get('/books?limit=1000').then(data=>setBooks(data.data.data) 
            )
        },[])

    const addBook =(newBook)=>{
        setBooks([...books,newBook])
    }

    const updateBook =(updatedBook)=>{
        setBooks(prev=>prev.map(a=>a._id === updatedBook._id?updatedBook:a))
    }

    const deleteBook =(id)=>{
        setBooks(prev=>prev.filter(a=>a._id !== id))
    }

    
    return (
        <booksContext.Provider  value={{books,addBook,updateBook,deleteBook}}>
         {children}
       </booksContext.Provider>
    );
}

export default BooksContextProvider;
