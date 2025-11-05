import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, FormControlLabel, FormGroup, Stack, TextField, Typography, Checkbox, MenuItem } from '@mui/material';
import axios from 'axios';
import axiosClient from '../../api/axiosClient';
import { useContext } from 'react';
import { booksContext } from '../../context/booksContextProvider';
import { useNavigate, useParams } from 'react-router-dom';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    genre: '',
    price: '',
    publishedYear: '',
    discount: '',
    createdBy: '',
    description: '',
    category: '',
    bookCoverImage: null,
    isOnSale: false,
  isFeatured: false,
  });

  
  const [categories, setCategories] = useState([]);
  const{books,addBook,updateBook} =useContext(booksContext)
  const Navigate=useNavigate()
  useEffect(() => {
    axiosClient.get('/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  const {id}=useParams()
  // console.log(id);
  let page_name="ADD"
  if(id){
    page_name="EDIT"
  }
  useEffect(()=>{  //in case of updating
    if(id){
    books.map(b=>b._id===id?setBook(b):book)
  }
  },[id,books])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setBook((prev) => ({ ...prev, bookCoverImage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in book) {
      formData.append(key, book[key]);
    }

    
    try {
      if(id){   
        const res = await axiosClient.put(`/books/${id}`, formData);
        updateBook(res.data);
        console.log('Book updated:', res.data);
        alert('Book updated successfully')
        Navigate('/admin/books')
        
      }
      const res = await axiosClient.post('/books', formData);
      addBook(res.data);
      console.log('Book Created:', res.data);
      alert('Book Created successfully')
      setBook({
    title: '',
    genre: '',
    price: '',
    publishedYear: '',
    discount: '',
    createdBy: '',
    description: '',
    category: '',
    bookCoverImage: null,
    isOnSale: false,
  isFeatured: false,
  })

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box width={500} margin="auto" mt={5} p={4} border="1px solid #ccc" borderRadius={3} boxShadow={3}>
      <Typography variant="h4" align="center" gutterBottom>{page_name} BOOK</Typography>
      <Divider sx={{ mb: 3 }} />
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField name="title" value={book.title} onChange={handleChange} label="Title" required />
          <TextField name="genre" value={book.genre} onChange={handleChange} label="Genre" />
          <TextField name="price" value={book.price} onChange={handleChange} label="Price" required />
          <TextField name="publishedYear" value={book.publishedYear} onChange={handleChange} label="Published Year" required />
          <TextField name="discount" value={book.discount} onChange={handleChange} label="Discount" />
          <TextField name="createdBy" value={book.createdBy} onChange={handleChange} label="Created By"  />
          <TextField name="description" value={book.description} onChange={handleChange} label="Description" multiline rows={3} />

          <TextField
            select
            label="Select Category"
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.name}
              </MenuItem>
            ))}
          </TextField>

          <FormGroup>
            <FormControlLabel  control={<Checkbox checked={book.isOnSale} onChange={e => setBook(prev => ({ ...prev, isOnSale: e.target.checked }))} />} label="Is On Sale" />
            <FormControlLabel control={<Checkbox checked={book.isFeatured} onChange={e => setBook(prev => ({ ...prev, isFeatured: e.target.checked }))} />} label="Is Featured" />
          </FormGroup>

          <TextField
            name="bookCoverImage"
            onChange={handleFileChange}
            type="file"
            inputProps={{ accept: 'image/*' }}
          />

          <Button type="submit" variant="contained" sx={{ backgroundColor: "rgb(254,186,193)", borderRadius: "20px" }}>
            Create Book
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddBook;
