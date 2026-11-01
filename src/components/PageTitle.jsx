import styled from 'styled-components'
import { theme } from '../styles/theme'

const Wrap = styled.header`
  margin-bottom: 36px;
  h1 {
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: clamp(1.8rem, 5vw, 2.4rem);
    color: ${theme.dark};
    text-shadow: 0 3px 6px rgba(63, 61, 86, 0.25);
  }
  h1 span { color: ${theme.accent}; }
  p { margin-top: 8px; }
`

// Título reutilizável das páginas internas
export default function PageTitle({ children, destaque, subtitulo }) {
  return (
    <Wrap>
      <h1>
        {children} {destaque && <span>{destaque}</span>}
      </h1>
      {subtitulo && <p>{subtitulo}</p>}
    </Wrap>
  )
}
