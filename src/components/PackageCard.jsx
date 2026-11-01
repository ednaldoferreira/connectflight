import styled from 'styled-components'
import { theme } from '../styles/theme'

const Card = styled.article`
  border: 1px solid ${theme.line};
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  h3 { font-family: 'Dosis', sans-serif; font-size: 1.4rem; color: ${theme.dark}; }
  .local { font-size: 0.9rem; }
  .preco { margin-top: 12px; font-weight: 700; color: ${theme.dark}; }
  .preco small { font-weight: 400; color: ${theme.text}; }
  .selo {
    display: inline-block; margin-bottom: 8px; padding: 2px 10px;
    border-radius: 999px; background: ${theme.accent}; color: #fff;
    font-size: 0.8rem; font-weight: 600;
  }
`

// Card reutilizado em Destinos e Ofertas (props: nome, local, descricao, preco, selo)
export default function PackageCard({ nome, local, descricao, preco, selo }) {
  return (
    <Card>
      {selo && <span className="selo">{selo}</span>}
      <h3>{nome}</h3>
      <p className="local">{local}</p>
      <p>{descricao}</p>
      <p className="preco">
        <small>a partir de</small> R$ {preco.toLocaleString('pt-BR')}
      </p>
    </Card>
  )
}
