import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Card from "../components/Card";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <h1>Hello, from Home page</h1>
        <Button/> */}
       <Card/>
      <Footer/>
      </div>
    );
  }
}

export default Home;