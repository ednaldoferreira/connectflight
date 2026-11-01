import styled from 'styled-components'
import { theme } from '../styles/theme'

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: clamp(60px, 9vw, 110px);
`

// Onda escura do rodapé (ocupa 100% da largura)
export default function Wave() {
  return (
    <Svg viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,30 C300,5 520,70 820,62 C1120,54 1300,30 1440,0 L1440,110 L0,110 Z"
        fill={theme.dark}
      />
    </Svg>
  )
}
