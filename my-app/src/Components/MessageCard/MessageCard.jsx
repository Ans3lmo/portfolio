import React, { useState } from 'react';
import './messagecard.css';

export function MessageCard() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [dadosEnv, setDadosEnv] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const dadosForm = {
      nome: nome,
      email: email,
      mensagem: msg,
    }
    setDadosEnv([...dadosEnv, dadosForm])
    console.log('email enviado ao proprietario')

    setNome('')
    setEmail('')
    setMsg('')
  }

  return (
    <div>
      <form id="msgContainer" onSubmit={handleSubmit}>
        <label htmlFor="">
          Nome
           <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}required/>
        </label>

        <label htmlFor="">
          E-mail
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
        </label>
        <label htmlFor="">
          Mensagem
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)}required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}