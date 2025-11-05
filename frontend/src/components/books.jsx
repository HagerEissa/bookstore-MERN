import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import axiosClient from '../api/axiosClient';
import { useContext } from 'react';
import { booksContext } from '../context/booksContextProvider';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));



export default function Books() {
    // const [Books,setBooks] = useState([])
    // useEffect(()=>{
    //     axiosClient.get('/books').then(data=>setBooks(data.data.data))
    // },[])
    const{books} =useContext(booksContext)

    // const someBooks = Books.slice(0, 8);
    const latestBooks = [...books]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    // .slice(0, 4);
    // console.log("someBooks",someBooks);
    


  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <Box>
        <Typography variant="h4" sx={{ mt:3,mb: 3, fontWeight: 'bold', textAlign: 'center',color:"rgb(254,186,193)" }}>
            New Arrivals
        </Typography>
        <Grid container spacing={3}>
            {latestBooks.map((book) => (
            <Grid item key={book._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                // avatar={
                // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     R
                // </Avatar>
                // }
                // action={
                // <IconButton aria-label="settings">
                //     <MoreVertIcon />
                // </IconButton>
                // }
                title= {book.title}
                subheader={book.category?.name}
            />
            <CardMedia
                component="img"
                height="194"
                image={`http://localhost:3000/imgs/${book.bookCoverImage}`}
                alt={book.title}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {book.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> */}
                <ExpandMore
                expand={expandedId === book._id}
                onClick={() => handleExpandClick(book._id)}
                aria-expanded={expandedId === book._id}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expandedId === book._id}   timeout="auto" unmountOnExit>
                <CardContent>
                <Typography sx={{ marginBottom: 2 }}>description:</Typography>
                <Typography sx={{ marginBottom: 2 ,color:"gray"}}>
                    {book.description}
                </Typography>
                <Typography sx={{ marginBottom: 2 ,fontWeight: 'bold',color:"rgb(254,186,193)"}}>
                    Price: {book.price} $
                </Typography>
                <Typography sx={{ marginBottom: 2,color:"gray" }}>
                    Published: {book.publishedYear}
                </Typography>
                
                </CardContent>
            </Collapse>
            </Card>
            </Grid>
            ))}
        </Grid>
    </Box>
  );
}
