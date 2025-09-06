import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Testimonials from '../components/Testimonials/Testimonials';
import PostList from '../components/PostList/PostList';
import CTA from '../components/CTA/CTA'; // 1. Importamos

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Testimonials />
            <PostList />
            <CTA /> {/* 2. Lo añadimos como la sección final, justo antes del Footer */}
        </div>
    );
};

export default HomePage;