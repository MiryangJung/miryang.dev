import GuestbookLayout from '../layouts/guestbook';
import { NextSeo } from 'next-seo';
import { meta } from '../data/Metadata.bs';

function Guestbookpage({ list, data }) {
  return (
    <>
      <NextSeo
        title="Guestbook"
        description="한 줄 방명록"
        canonical={`${meta.url}/guestbook`}
        openGraph={{ url: `${meta.url}/guestbook` }}
      />
      <GuestbookLayout list={list} initData={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    encodeURI(`https://workers.miryang.dev/guestbook?type=all`)
  );
  const data = await res.json();
  const list = Object.keys(data).sort().reverse();

  return {
    props: { list, data }
  };
}

export default Guestbookpage;
