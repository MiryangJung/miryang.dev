import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const HomeProfileContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  padding: 25px;
`

export const Name = styled.span`
  font-weight: 700;
  color: var(--tx-white);
  ${mq()({
    fontSize: ['30px', '35px'],
  })}
`

export const Description = styled.span`
  color: var(--tx-white);
  font-weight: 300;
  margin-top: 10px;
  word-break: keep-all;
  ${mq()({
    fontSize: ['16px', '18px'],
  })}
`

export const LearnMore = styled.span`
  margin-top: 20px;
  a {
    font-weight: 500;
    color: var(--bg-a5);
    font-size: 12px;
  }
`
