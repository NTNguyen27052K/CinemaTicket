import React, { Component } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Body from "../Components/Body";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
