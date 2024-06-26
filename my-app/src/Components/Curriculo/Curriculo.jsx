import React from "react";
import './curriculo.css';

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export class Curriculo extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Minhas competências</h1>
        <Footer />
      </>
    )
  }
}