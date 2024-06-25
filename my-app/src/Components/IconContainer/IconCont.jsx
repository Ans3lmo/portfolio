import React from 'react';
import './iconcont.css';

export class IconCont extends React.Component {
  render(){
    return (
      <a id="iconContainer" href={this.props.iconLink} target="_self">
        <img src={this.props.icon} alt=""/>
        <span className="iconText" >{this.props.iconTitle}</span>
      </a>
    )
  }
}