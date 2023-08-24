import { NoteContainer, NoteContent } from './note.style';
import NoteAside from '../components/NoteAside';
import MDXPost from '../components/MDXPost';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Container from '../components/Container';
import { meta } from '../data/Metadata.bs';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

function NoteLayout({ tree, note }) {
  const MDXComponent = useMDXComponent(note.body.code);

  return (
    <Container>
      <NextSeo
        title={note.title}
        description={`Code Snippets or Code note`}
        canonical={`${meta.url}/${note.url_path}`}
        openGraph={{
          type: 'article',
          url: `${meta.url}/${note.url_path}`,
          article: {
            publishedTime: new Date(note.date).toISOString(),
            tags: ['Frontend', 'Develop']
          },
          images: [
            {
              url: `${meta.url}/note/note.png`,
              width: 850,
              height: 650,
              alt: note.title
            }
          ]
        }}
      />

      <Link href="https://miryang-dev.tistory.com" passHref>
        <a target="_blank" className="underline my-3">
          더 편한 메모 작성을 위해 miryang-dev.tistory로 이사했습니다.
        </a>
      </Link>

      <NoteContainer>
        <NoteAside tree={tree} />
        <NoteContent>
          <MDXPost title={note.title} date={note.date}>
            <MDXComponent />
          </MDXPost>
        </NoteContent>
      </NoteContainer>
    </Container>
  );
}

export default NoteLayout;
