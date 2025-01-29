import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Aboutsub from '../components/aboutsub';
import { TracingBeam } from "../components/ui/tracing-beam";

function Aboutus() {
  return (
    
<>
    <Navbar />
    <TracingBeam className="px-6 mt-20">
    <Aboutsub/> 
    </TracingBeam>
    <Footer />
    </>
  );
}

export default Aboutus;
