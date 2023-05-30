import React from 'react'
import supabase from "../config/sbClient";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testing = ({ makanan }) => {
  console.log(makanan)
  return (
    <div>
      <Navbar />
    
      <Footer />
    </div>
  )
}

export const getprops =  async () => {
  let { data } = await supabase.from('makanan').select()
  return {
    props: {
      makanan: data
    },
  }
}

export default testing