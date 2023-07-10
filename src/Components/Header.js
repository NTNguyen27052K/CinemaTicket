import React, { Component, PureComponent } from "react";

export default class Header extends PureComponent {
  render() {
    console.log("Header");
    return (
      <h1 className="text-white text-center my-5">MOVIE SEAT SELECTION</h1>
    );
  }
}
