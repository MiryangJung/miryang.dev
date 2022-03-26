import Container from '../components/Container'
import WriteGuestbook from '../components/WriteGuestbook'
import Title from '../components/Title'
import GuestbookNotice from '../components/GuestbookNotice'
import { tGuestbooks } from '../lib/types'
import GuestbookDate from '../components/GuestbookDate'
import React, { useState } from 'react'
import ChatBubble from '../components/ChatBubble'

function GuestbookLayout({ list, initData }: { list: string[]; initData: tGuestbooks }) {
  const [data, setData] = useState<tGuestbooks>(initData)

  return (
    <Container>
      <WriteGuestbook data={data} setData={setData} />
      <Title title="Guestbook" des="한 줄 방명록을 남겨주세요." />
      <GuestbookNotice />
      {list.map(key => (
        <React.Fragment key={key}>
          <GuestbookDate date={key} />
          {data[key] && (
            <>
              {data[key].map((d, index) => (
                <ChatBubble key={`${d.createdAt}-${index}`} content={d.content} color={d.color} />
              ))}
            </>
          )}
        </React.Fragment>
      ))}
    </Container>
  )
}

export default GuestbookLayout
