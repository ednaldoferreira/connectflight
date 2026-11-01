import styled from 'styled-components'
import { theme } from '../styles/theme'
import ilustracao from '../assets/ilustracao.png'

const Img = styled.img`
  width: min(400px, 100%);
  height: auto;
  margin-bottom: 24px;
`
const Title = styled.h1`
  font-family: 'Dosis', sans-serif;
  font-weight: 600;
  font-size: clamp(1.8rem, 5vw, 2.2rem);
  color: ${theme.dark};
  text-shadow: 0 3px 6px rgba(63, 61, 86, 0.25);
  margin-bottom: 16px;
  span { color: ${theme.accent}; }
`
const Text = styled.p`
  margin-bottom: 24px;
`

export default function Hero() {
  return (
    <section>
      <Img src={ilustracao} alt="Mulher marcando destinos em um globo terrestre" />
      <Title>
        O seu próximo <span>destino</span> pode estar aqui...
      </Title>
      <Text>
        Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
      </Text>
      <Text>
        No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e
        internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro
        viagem com <strong>preços arrasadores</strong>!
      </Text>
      <Text>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</Text>
    </section>
  )
}
