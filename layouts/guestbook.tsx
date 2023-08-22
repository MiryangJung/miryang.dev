import Container from '../components/Container';
import WriteGuestbook from '../components/WriteGuestbook';
import Title from '../components/Title.bs';
import GuestbookNotice from '../components/GuestbookNotice.bs';
import { tGuestbooks } from '../lib/types';
import GuestbookDate from '../components/GuestbookDate.bs';
import React, { useState } from 'react';
import ChatBubble from '../components/ChatBubble.bs';

function GuestbookLayout({
  list,
  initData
}: {
  list: string[];
  initData: tGuestbooks;
}) {
  const [num, setNum] = useState(3);
  const [keys, setKeys] = useState(list.slice(0, 3));
  const [data, setData] = useState<tGuestbooks>(initData);

  function onClickLoadMore() {
    const newNum = num + 3;
    if (newNum >= list.length) {
      setNum(list.length);
      setKeys(list.slice(0, list.length));
    } else {
      setNum((prev) => prev + 3);
      setKeys(list.slice(0, newNum));
    }
  }

  return (
    <Container>
      <WriteGuestbook data={data} setData={setData} />
      <Title title="Guestbook" des="한 줄 방명록을 남겨주세요." />
      <GuestbookNotice />
      {keys.map((key) => (
        <React.Fragment key={key}>
          <GuestbookDate date={key} />
          {data[key] && (
            <>
              {data[key].map((d, index) => (
                <ChatBubble
                  key={d.createdAt + index}
                  content={d.content}
                  color={d.color}
                />
              ))}
            </>
          )}
        </React.Fragment>
      ))}
      {num !== list.length && (
        <button
          className="mt-5 font-bold text-lg rounded-sm"
          onClick={onClickLoadMore}
        >
          더보기
        </button>
      )}
    </Container>
  );
}

export default GuestbookLayout;
