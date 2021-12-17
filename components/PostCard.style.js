import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const PostContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  margin: 15px 0;
  padding: 5px;
  cursor: pointer;
  transition: transform 500ms;
  &:hover {
    transform: translateX(-10px);
  }
  & .round-image {
    border-radius: 8px;
  }
`

export const PostText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  flex: 1;
`

export const PostTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--tx-main);
  margin: 5px 0;
  ${mq()({
    fontSize: ['20px', '22px'],
  })}
`

export const PostDescription = styled.span`
  font-weight: 300;
  color: var(--tx-sub);
  word-break: keep-all;
  ${mq()({
    fontSize: ['16px', '18px'],
  })}
`

export const PostDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--tx-sub-dark);
  margin-top: 5px;
`
