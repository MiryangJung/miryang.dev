import { NoteContainer, NoteContent } from './note.style'
import NoteAside from '../components/NoteAside'
import MDXPost from '../components/MDXPost'
import { useMDXComponent } from 'next-contentlayer/hooks'

function NoteLayout({ tree, note }) {
  const MDXComponent = useMDXComponent(note.body.code)
  return (
    <NoteContainer>
      <NoteAside tree={tree} />
      <NoteContent>
        <MDXPost title={note.title} date={note.date}>
          <MDXComponent />
        </MDXPost>
      </NoteContent>
    </NoteContainer>
  )
}

export default NoteLayout
