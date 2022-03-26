import styled from '@emotion/styled'
import mq from '../styles/util/mq'
import { css } from '@emotion/react'

const dynamicVisible = ({ visible }) => {
  if (visible) {
    return css`
      display: flex;
      border-left: 5px solid var(--bg-sub);
      border-right: none;
      padding-left: 10px;
      padding-right: 5px;
    `
  } else {
    return css`
      @media (max-width: 750px) {
        display: none;
        border-left: none;
      }
    `
  }
}
export const NoteAsideContainer = styled.div`
  flex-flow: column nowrap;
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border-right: 1px solid var(--bg-sub);
  padding-bottom: 20px;
  padding-right: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  ${mq()({
    maxWidth: ['100%', '170px'],
    marginRight: ['0', '20px'],
  })}
  ${dynamicVisible}
`

export const NoteAsideText = styled.a`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0;
  word-break: keep-all;
  font-weight: 600;
  &:hover {
    color: var(--tx-accent-light);
  }
`

export const NoteAsideChildText = styled.a`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0 10px 15px;
  word-break: keep-all;
  font-size: 14px;
  &:hover {
    color: var(--tx-accent);
  }
`

export const NoteAsideMobileIcon = styled.div`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--tx-accent-light);
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  left: 30px;
  border-radius: 100%;
  transition: 0.5s;
  &:hover {
    background: var(--tx-accent);
  }
  ${mq()({
    display: ['flex', 'none'],
  })}
`
