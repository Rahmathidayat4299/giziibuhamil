import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Scrollbutton from "../components/Scrollbutton.jsx";
import Nutrisi from '../components/Nutrisi';

const nutrisi = () => {
  return (
    <>
    <div className=''>
      <Navbar />
      <Nutrisi />
      <Scrollbutton />
    </div>
    <Footer />
    </>
  )
}

export default nutrisi