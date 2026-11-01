import PageTitle from '../components/PageTitle'
import CardGrid from '../components/CardGrid'
import { ofertas } from '../data/pacotes'

export default function Ofertas() {
  return (
    <>
      <PageTitle destaque="arrasadores" subtitulo="Ofertas por tempo limitado.">
        Preços
      </PageTitle>
      <CardGrid pacotes={ofertas} />
    </>
  )
}
