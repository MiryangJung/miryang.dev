import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const NoteContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  ${mq()({
    flexFlow: ['column nowrap', 'row nowrap'],
  })}
`
export const NoteContent = styled.div`
  width: 100%;
  ${mq()({
    maxWidth: ['100%', 'calc(100% - 220px)'],
  })}
`
