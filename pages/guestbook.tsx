import GuestbookLayout from '../layouts/guestbook'
import { NextSeo } from 'next-seo'
import metadata from '../data/metadata'

function Guestbookpage({ list, data }) {
  return (
    <>
      <NextSeo
        title="Guestbook"
        description="한 줄 방명록"
        canonical={`${metadata.meta.url}/guestbook`}
        openGraph={{ url: `${metadata.meta.url}/guestbook` }}
      />
      <GuestbookLayout list={list} initData={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(encodeURI(`https://workers.miryang.dev/guestbook?type=all`))
  const data = await res.json()
  const list = Object.keys(data).sort().reverse()

  return {
    props: { list, data },
  }
}

export default Guestbookpage
