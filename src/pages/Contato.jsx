import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'

export default function Contato() {
  return (
    <>
      <PageTitle destaque="contato" subtitulo="Conte para onde quer ir e a gente cuida do resto.">
        Fale com a gente:
      </PageTitle>
      <ContactForm />
    </>
  )
}
