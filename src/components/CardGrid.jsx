import styled from 'styled-components'
import PackageCard from './PackageCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`

export default function CardGrid({ pacotes }) {
  return (
    <Grid>
      {pacotes.map((p) => (
        <PackageCard key={p.nome} {...p} />
      ))}
    </Grid>
  )
}
