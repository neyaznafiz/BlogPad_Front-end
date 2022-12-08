import { BlogDetails } from '@/Components/BlogDetails';
import React from 'react';
import Banner from './Banner';

export const Home = () => {
    return (
        <div className='side-p'>
        <Banner />
        <BlogDetails/>
        </div>
    );
};


