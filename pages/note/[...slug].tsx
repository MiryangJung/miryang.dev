import { allNotes, Note } from 'contentlayer/generated'
import { PathSegment, TreeNode } from '../../lib/types'
import NoteLayout from '../../layouts/note'

const NotePostPage = ({ note, tree }) => {
  return <NoteLayout note={note} tree={tree} />
}

export const getStaticPaths = async () => {
  const paths = allNotes.map(note => ({
    params: {
      slug: note.pathSegments.map((_: PathSegment) => _.pathName),
    },
  }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
  const pagePath = params.slug.join('/')
  const note = allNotes.find(
    _ => _.pathSegments.map((_: PathSegment) => _.pathName).join('/') === pagePath
  )!

  const tree = buildTree(allNotes)
  return { props: { note, tree } }
}

const buildTree = (notes: Note[], parentPathNames: string[] = []): TreeNode[] => {
  const level = parentPathNames.length
  return notes
    .filter(
      _ =>
        _.pathSegments.length === level + 1 &&
        _.pathSegments
          .map((_: PathSegment) => _.pathName)
          .join('/')
          .startsWith(parentPathNames.join('/'))
    )
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map<TreeNode>(doc => ({
      title: doc.title,
      date: doc.date,
      urlPath: '/note/' + doc.pathSegments.map((_: PathSegment) => _.pathName).join('/'),
      children: buildTree(
        notes,
        doc.pathSegments.map((_: PathSegment) => _.pathName)
      ),
    }))
}

export default NotePostPage
