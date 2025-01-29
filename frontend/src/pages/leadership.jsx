import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Faculty from '../components/faculty';
import Facultyall from '../components/facultyall';

function leadership() {
  return (
     <>
     <Navbar/>
     <div className="mt-24">
     <Faculty/>
     </div>
     <Facultyall/>
     <Footer/>
     </>
  )
}

export default leadership