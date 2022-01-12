import GuestbookLayout from '../layouts/guestbook'

function Guestbookpage({ list, data }) {
  return <GuestbookLayout list={list} initData={data} />
}

export async function getServerSideProps(context) {
  const workers = process.env.NEXT_PUBLIC_WORKERS
  const resList = await fetch(encodeURI(`${workers}/guestbook?type=list`))
  const json = await resList.json()
  const list = json.sort().reverse()

  const res = await fetch(encodeURI(`${workers}/guestbook?type=all`))
  const data = await res.json()

  return {
    props: { list, data },
  }
}

export default Guestbookpage
