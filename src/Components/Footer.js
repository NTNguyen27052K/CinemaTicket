import React, { Component, PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    console.log("Footer");
    return (
      <div className="text-white">
        © 2018 Movie Seat Selection . All Rights Reserved | Design by W3layouts
      </div>
    );
  }
}
