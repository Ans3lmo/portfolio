import React from 'react';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Profile } from './Components/Profile/Profile';
import { Social } from './Components/Social/Social';

export class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Profile />

        <Social />

        <Footer />
      </>
    );
  }
}