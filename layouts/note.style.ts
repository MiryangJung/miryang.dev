import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const NoteContainer = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  ${mq()({
    flexFlow: ['column nowrap', 'row nowrap'],
  })}
`
export const NoteContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ${mq()({
    maxWidth: ['100%', 'calc(100% - 190px)'],
  })}
`
