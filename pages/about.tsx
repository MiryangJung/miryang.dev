import Title from '../components/Title'
import AboutProfile from '../components/AboutProfile'
import Container from '../components/Container'
import metadata from '../data/metadata'

function Aboutpage() {
  const customMeta = {
    title: `About - ${metadata.meta.title}`,
  }
  return (
    <Container customMeta={customMeta}>
      <Title title="About" des="Let me introduce myself." />
      <AboutProfile />
    </Container>
  )
}

export default Aboutpage
