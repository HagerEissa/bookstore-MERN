import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
    const [result,setResult]=useState([])
    const query = useQuery()
    const searchTerm = query.get('q') 
    // console.log(query.get('q') );
    useEffect(()=>{
        axiosClient.get(`/books?q=${searchTerm}`).then(data=>setResult(data.data.data)).catch(err => console.error(err));
    },[])

  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

    
    return (
        <Box>
        <Typography variant="h4" sx={{ mt:3,mb: 3, fontWeight: 'bold', textAlign: 'center',color:"rgb(254,186,193)" }}>
            Search results:{searchTerm}
        </Typography>
        <Grid container spacing={3}>
            {result.map((book) => (
            <Grid item key={book._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
            <CardHeader
               
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

export default SearchResults;
