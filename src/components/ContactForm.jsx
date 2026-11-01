import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Form = styled.form`
  display: grid;
  gap: 14px;
  text-align: left;
  label { display: grid; gap: 4px; font-weight: 600; color: ${theme.dark}; }
  input, textarea {
    font: inherit; padding: 10px 12px; border-radius: 8px;
    border: 1px solid #d9d9e0; color: ${theme.dark};
  }
  button {
    font: inherit; font-weight: 700; padding: 12px; border: 0; border-radius: 8px;
    background: ${theme.dark}; color: #fff; cursor: pointer;
  }
  button:hover { background: ${theme.accent}; }
`
const Ok = styled.p`
  color: ${theme.dark};
  font-weight: 700;
`

// Formulário controlado (usa state): mostra confirmação ao enviar
export default function ContactForm() {
  const [dados, setDados] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const alterar = (e) => setDados({ ...dados, [e.target.name]: e.target.value })
  const enviar = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) return <Ok>Obrigado, {dados.nome}! Responderemos em breve no e-mail {dados.email}.</Ok>

  return (
    <Form onSubmit={enviar}>
      <label>Nome<input name="nome" value={dados.nome} onChange={alterar} required /></label>
      <label>E-mail<input name="email" type="email" value={dados.email} onChange={alterar} required /></label>
      <label>Mensagem<textarea name="mensagem" rows="4" value={dados.mensagem} onChange={alterar} required /></label>
      <button type="submit">Enviar mensagem</button>
    </Form>
  )
}
