import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Hello, from Home page</h1>
        <Button/>
      </div>
    );
  }
}

export default Home;