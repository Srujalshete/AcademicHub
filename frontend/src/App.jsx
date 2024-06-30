import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from "./components/navbar";
// import Hero from "./components/hero";
// import About from "./components/about";
import './App.css';
// import Gallery from "./components/gallery";
// import Faculty from "./components/faculty";
// import Contact from "./components/contact";
// import Footer from "./components/footer";
import Login from "./components/login";
import Layout from './pages/layout';
import AboutUS from './pages/Aboutus';
import Alumini from "./components/alumini";
import Career from "./components/career";
import Schedule from './components/schedule';
import Hosteladm from './components/hosteladm';
import Contactus from './pages/contactus';
import Campus from './components/campus';
import Tour from './components/tour';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/layout" element={<Layout />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/career" element={<Career />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/hosteladm" element={<Hosteladm />} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/campus" element={<Campus/>} />
        <Route path="/tour" element={<Tour/>} />
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<Navigate to="/layout" />} /> 
      </Routes>
    </Router>
  );
}

export default App;

 