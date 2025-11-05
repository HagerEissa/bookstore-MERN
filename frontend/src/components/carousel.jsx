import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
  "f1.png",
  "f2.png",
  "f3.png",
  "f4.png",
];

const SimpleCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%',           
        maxWidth: '100vw',       
        height: '400px',        
        overflow: 'hidden',
        margin: 'auto' 
      }}
    >
      <img 
        src={images[index]} 
        alt={`slide-${index}`} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',   
          borderRadius: '0'
        }} 
      />

      <IconButton
        onClick={prevSlide}
        sx={{ 
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{ 
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default SimpleCarousel;
