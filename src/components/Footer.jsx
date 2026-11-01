import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { theme } from '../styles/theme'
import Wave from './Wave'

const Nav = styled.nav`
  width: min(420px, 90%);
  margin: 0 auto;
  padding: 28px 0 24px;
  border-top: 1px solid ${theme.line};
  display: flex;
  justify-content: center;
  gap: 46px;
`
const Item = styled(NavLink)`
  color: ${theme.dark};
  font-weight: 700;
  text-decoration: none;
  &:hover, &.active { color: ${theme.accent}; }
`

export default function Footer() {
  return (
    <footer>
      <Nav aria-label="Navegação principal">
        <Item to="/destinos">Destinos</Item>
        <Item to="/ofertas">Ofertas</Item>
        <Item to="/contato">Contato</Item>
      </Nav>
      <Wave />
    </footer>
  )
}
