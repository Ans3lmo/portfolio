import React from "react";
import './about.css';

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export class About extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>About</h1>
        <Footer />
      </>
    )
  }
}