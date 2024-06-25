import React from 'react';
import './profile.css';
import typingBro from '../../../assets/images/typing-bro.png';

export class Profile extends React.Component {
  render() {
    return (
      <div id="profile">
        <img src={typingBro} alt="" />
        <div className="profileDesc">
          <h1>Matheus Souza Anselmo</h1>
          <p>Front-End Development | Web Design <br/> Networks | Cloud Computing Services</p>
        </div>
      </div>
    )
  }
}