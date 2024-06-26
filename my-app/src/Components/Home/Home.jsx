import React from "react";
import '../../App.css';

import { Profile } from './Profile/Profile';
import { About } from './About/About';
import { Social } from './Social/Social';

export class Home extends React.Component {
  render(){
    return (
      <>
        <Profile />
        <About />
        <Social />
      </>
    )
  }
}