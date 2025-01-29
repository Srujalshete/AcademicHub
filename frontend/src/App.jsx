import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'; 
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
import Beam from './components/beam';
import Leadership from './pages/leadership';
import Facility from './components/facility';
import Transport from './components/transport';
import Signup from './components/signup';
import AdminDashboard from './pages/AdminDashboard';
import Metro from './components/ui/metro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/layout" element={<Layout />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/career" element={<Career />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/hosteladm" element={<Hosteladm />} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/campus" element={<Campus/>} />
        <Route path="/tour" element={<Tour/>} />
        <Route path="/beam" element={<Beam />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/facility" element={<Facility/>} />
        <Route path="/transport" element={<Transport/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/metro" element={<Metro />} />
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<Navigate to="/layout" />} /> 
      </Routes>
    </Router>
  );
}

export default App;

 