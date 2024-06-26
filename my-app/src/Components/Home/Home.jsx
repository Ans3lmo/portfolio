import React from "react";
import '../../App.css';

import { Profile } from './Profile/Profile';
import { Social } from './Social/Social';

export class Home extends React.Component {
  render(){
    return (
      <>
        <Profile />
        <Social />
      </>
    )
  }
}