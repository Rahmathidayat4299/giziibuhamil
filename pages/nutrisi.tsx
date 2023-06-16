import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Scrollbutton from "../components/Scrollbutton.jsx";
import Nutrisi from '../components/Nutrisi';

type Props = {}

const nutrisi = (props: Props) => {
  return (
    <>
      <Navbar />
      <Nutrisi />
      <Scrollbutton />
      <Footer />
    </>
  )
}

export default nutrisi