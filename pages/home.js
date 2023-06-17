import React, { Component } from "react";
import "../components/index.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card.jsx";
import Hero from "../components/Hero";
import Scrollbutton from "../components/Scrollbutton.jsx";

class Home extends Component {
  render() {
    return (
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <div className="container mx-auto text-center py-8">
          <h2 className="text-3xl font-bold mb-4">Ibu Hamil Sehat</h2>
          <p className="text-gray-600">
            Menyediakan informasi dan panduan gizi yang sehat untuk ibu hamil
            Kami dengan senang hati mempersembahkan sumber daya yang berdedikasi
            untuk memberikan informasi penting mengenai gizi yang sehat selama
            masa kehamilan. Kami paham betapa pentingnya asupan nutrisi yang
            tepat bagi perkembangan janin dan kesehatan ibu hamil.
          </p>
        </div>
        <Card />
        <Scrollbutton />
        <Footer />
      </div>
    );
  }
}

export default Home;
