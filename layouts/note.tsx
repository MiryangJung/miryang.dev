import { NoteContainer, NoteContent } from './note.style'
import NoteAside from '../components/NoteAside'
import MDXPost from '../components/MDXPost'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Container from '../components/Container'

function NoteLayout({ tree, note }) {
  const customMeta = {
    title: note.title,
    description: 'Code Snippets or Code note',
  }
  const MDXComponent = useMDXComponent(note.body.code)
  return (
    <Container customMeta={customMeta}>
      <NoteContainer>
        <NoteAside tree={tree} />
        <NoteContent>
          <MDXPost title={note.title} date={note.date}>
            <MDXComponent />
          </MDXPost>
        </NoteContent>
      </NoteContainer>
    </Container>
  )
}

export default NoteLayout
