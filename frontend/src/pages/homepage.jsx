import React from 'react';
import SimpleCarousel from '../components/carousel';
import FeaturedProducts from '../components/featuredProducts';
import Books from '../components/books';

const Homepage = () => {
    return (
        <div>
            <SimpleCarousel></SimpleCarousel>
            <FeaturedProducts></FeaturedProducts>
            <Books></Books>
            Homepage
        </div>
    );
}

export default Homepage;
