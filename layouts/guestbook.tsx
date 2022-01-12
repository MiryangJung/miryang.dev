import Container from '../components/Container'
import WriteGuestbook from '../components/WriteGuestbook'
import Title from '../components/Title'
import metadata from '../data/metadata'
import GuestbookNotice from '../components/GuestbookNotice'
import { tGuestbooks } from '../lib/types'
import GuestbookDate from '../components/GuestbookDate'
import React, { useState } from 'react'
import ChatBubble from '../components/ChatBubble'

function GuestbookLayout({
  list,
  initData,
}: {
  list: Array<{ name: string }>
  initData: tGuestbooks
}) {
  const customMeta = {
    title: `Guestbook - ${metadata.meta.title}`,
  }

  const [data, setData] = useState<tGuestbooks>(initData)

  return (
    <Container customMeta={customMeta}>
      <WriteGuestbook data={data} setData={setData} />
      <Title title="Guestbook" des="한 줄 방명록을 남겨주세요." />
      <GuestbookNotice />
      {list.map(i => (
        <React.Fragment key={i.name}>
          <GuestbookDate date={i.name} />
          {data[i.name] && (
            <>
              {data[i.name].map((d, index) => (
                <ChatBubble key={d.createdAt} content={d.content} color={d.color} />
              ))}
            </>
          )}
        </React.Fragment>
      ))}
    </Container>
  )
}

export default GuestbookLayout
