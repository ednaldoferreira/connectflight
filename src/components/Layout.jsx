import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Content = styled.main`
  flex: 1;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 56px 24px 32px;
  text-align: center;
`

export default function Layout() {
  return (
    <Shell>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Shell>
  )
}
