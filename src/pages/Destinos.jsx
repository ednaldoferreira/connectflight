import PageTitle from '../components/PageTitle'
import CardGrid from '../components/CardGrid'
import { destinos } from '../data/pacotes'

export default function Destinos() {
  return (
    <>
      <PageTitle destaque="destinos" subtitulo="Pacotes completos nacionais e internacionais.">
        Escolha um dos nossos
      </PageTitle>
      <CardGrid pacotes={destinos} />
    </>
  )
}
