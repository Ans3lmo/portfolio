import React from 'react';
import './social.css';
import { IconCont } from '../IconContainer/IconCont'; // Conteiner dos ícones
import { MessageCard } from '../MessageCard/MessageCard'; // Card de mensagem

// Ícones usados neste componente
import iconGitHub from '../../../assets/icons/github.png';
import iconLinkedin from '../../../assets/icons/linkedin.png';
import iconEmail from '../../../assets/icons/email.png';
import iconMedium from '../../../assets/icons/medium.png';

// Componente pai dedicado à importação dos Compts. relacionados ao contato e redes sociais (ícones e caixa de mensagem)

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
              iconLink={"https://www.linkedin.com/in/matheus-souza-anselmo-aba10a215"}
              icon={iconLinkedin}  
              iconTitle={"LinkedIn"} />
            <IconCont 
              iconLink={"https://github.com/Ans3lmo"} 
              icon={iconGitHub} 
              iconTitle={"GitHub"} />
            <IconCont 
              iconLink={"https://medium.com/@Ans3lmo"}
              icon={iconMedium} 
              iconTitle={"Medium"} />
            <IconCont 
              iconLink={"https://"}
              icon={iconEmail} 
              iconTitle={"E-mail"} />
          </div>
        </div>
      </div>
    )
  }
}