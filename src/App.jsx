import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Ofertas from './pages/Ofertas'
import Contato from './pages/Contato'

// Todas as rotas compartilham o Layout (conteúdo + rodapé com navegação)
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}
