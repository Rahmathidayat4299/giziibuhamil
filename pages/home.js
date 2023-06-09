import React, { Component } from "react";
// import "../components/index.js";
// hi im najib, im from branch improvements
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Hero from "../components/Hero";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default Home;
