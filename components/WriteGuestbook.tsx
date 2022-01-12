import {
  WriteGbColor,
  WriteGbColors,
  WriteGbContainer,
  WriteGbContent,
  WriteGbLine,
  WriteGbSubmit,
} from './WriteGuestbook.style'
import { FormEvent, useState } from 'react'

type tColors = '#696262' | '#9088D4' | '#7c889f' | '#6C92BE' | '#8DB596' | '#c4a583' | '#BB8395'

const WriteGuestbook = () => {
  const colors: tColors[] = [
    '#696262',
    '#9088D4',
    '#7c889f',
    '#6C92BE',
    '#8DB596',
    '#c4a583',
    '#BB8395',
  ]
  const [content, setContent] = useState<string>('')
  const [color, setColor] = useState<tColors>(colors[0])

  const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const workers = process.env.NEXT_PUBLIC_WORKERS
    const token = process.env.NEXT_PUBLIC_GUESTBOOK
    const date = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })

    const res = await fetch(`${workers}/guestbook`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        key: date.slice(0, 7),
        token: token,
        data: { content, color, createdAt: date },
      }),
    })
    console.log(res.status)
  }

  return (
    <WriteGbContainer onSubmit={submitHandle}>
      <WriteGbLine>
        <WriteGbContent
          type="text"
          maxLength={100}
          required
          color={color}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <WriteGbSubmit type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
            transform="rotate(-60)"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
          </svg>
        </WriteGbSubmit>
      </WriteGbLine>
      <WriteGbColors>
        {colors.map(color => (
          <WriteGbColor key={color} color={color} onClick={() => setColor(color)} />
        ))}
      </WriteGbColors>
    </WriteGbContainer>
  )
}

export default WriteGuestbook
