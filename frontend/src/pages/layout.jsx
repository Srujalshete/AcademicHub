import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from '../components/hero';
import About from '../components/about';
import Gallery from '../components/gallery';
import Faculty from '../components/faculty';
import Contact from '../components/contact';
import Scrollbar from '../components/scrollbar';

const Layout = () => {
  return (
  
     
     <>
     <Navbar/>
     <Hero />
     <About />
     <Gallery />
     <Faculty />
     <Scrollbar />
     <Contact />
     <Footer />

     </>
  );
};

export default Layout;
