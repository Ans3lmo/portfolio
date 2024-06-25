import React from 'react';
import './social.css';
import { IconCont } from '../IconContainer/IconCont'; // Conteiner dos ícones
import { MessageCard } from '../MessageCard/MessageCard'; // Card de mensagem

import iconGitHub from '../../assets/icons/github.png';
import iconLinkedin from '../../assets/icons/linkedin.png';
import iconEmail from '../../assets/icons/email.png';
import iconWhatsapp from '../../assets/icons/whatsapp.png';

// Componente dedcado à importação dos Compts. relacionados ao contato e redes sociais

export class Social extends React.Component {
  render() {
    return (
      <div id="socialComponent">
        <div id="msgCard">
          <h2>Envie sua mensagem</h2>
          <MessageCard />
        </div>
        <hr />
        <div id="socialMedia">
          <h2>Conecte-se comigo</h2>
          <div className="iconBox">
            <IconCont 
              iconLink={"https://github.com/Ans3lmo"} 
              icon={iconGitHub} 
              iconTitle={"GitHub"} />
            <IconCont 
              iconLink={"https://"}
              icon={iconLinkedin}  
              iconTitle={"LinkedIn"} />
            <IconCont 
              iconLink={"https://"}
              icon={iconEmail} 
              iconTitle={"E-mail"} />
            <IconCont 
              iconLink={"https://"}
              icon={iconWhatsapp} 
              iconTitle={"Whatsapp"} />
          </div>
        </div>
      </div>
    )
  }
}