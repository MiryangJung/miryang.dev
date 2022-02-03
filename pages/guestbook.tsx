import GuestbookLayout from '../layouts/guestbook'

function Guestbookpage({ list, data }) {
  return <GuestbookLayout list={list} initData={data} />
}

export async function getServerSideProps(context) {
  const workers = process.env.NEXT_PUBLIC_WORKERS
  const res = await fetch(encodeURI(`${workers}/guestbook?type=all`))
  const data = await res.json()
  const list = Object.keys(data).sort().reverse()

  return {
    props: { list, data },
  }
}

export default Guestbookpage
