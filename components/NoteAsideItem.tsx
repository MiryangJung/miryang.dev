import { NoteAsideChildText, NoteAsideText } from './NoteAside.style'
import Link from 'next/link'
import React, { useState } from 'react'

const NoteAsideItem = ({ item }) => {
  const [isItemsOpen, setIsItemsOpen] = useState(false)

  return (
    <>
      <React.Fragment key={item.title}>
        <Link href={item.urlPath} passHref>
          <NoteAsideText onClick={() => setIsItemsOpen(!isItemsOpen)}>
            {isItemsOpen ? '⎖ ' : '➤ '}
            {item.title}
          </NoteAsideText>
        </Link>
        {item.children && item.children.length > 0 && isItemsOpen && (
          <>
            {item.children.map(c => (
              <Link key={c.title} href={c.urlPath}>
                <NoteAsideChildText>{c.title}</NoteAsideChildText>
              </Link>
            ))}
          </>
        )}
      </React.Fragment>
    </>
  )
}

export default NoteAsideItem
