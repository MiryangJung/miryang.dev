import { NoteContainer, NoteContent } from './note.style'
import NoteAside from '../components/NoteAside'
import MDXPost from '../components/MDXPost'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Container from '../components/Container'
import metadata from '../data/metadata'
import { NextSeo } from 'next-seo'

function NoteLayout({ tree, note }) {
  const MDXComponent = useMDXComponent(note.body.code)

  return (
    <Container>
      <NextSeo
        title={note.title}
        description={`Code Snippets or Code note`}
        canonical={`${metadata.meta.url}/${note.url_path}`}
        openGraph={{
          type: 'article',
          url: `${metadata.meta.url}/${note.url_path}`,
          article: {
            publishedTime: new Date(note.date).toISOString(),
            tags: ['Frontend', 'Develop'],
          },
          images: [
            {
              url: `${metadata.meta.url}/note/note.png`,
              width: 850,
              height: 650,
              alt: note.title,
            },
          ],
        }}
      />
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
