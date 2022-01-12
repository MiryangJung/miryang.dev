import Container from '../components/Container'
import metadata from '../data/metadata'
import WriteGuestbook from '../components/WriteGuestbook'
import Title from '../components/Title'

function Guestbookpage() {
  const customMeta = {
    title: `Guestbook - ${metadata.meta.title}`,
  }
  return (
    <Container customMeta={customMeta}>
      <WriteGuestbook />
      <Title title="Guestbook" des="한 줄 방명록을 남겨주세요." />
      테스트중
    </Container>
  )
}

export default Guestbookpage
