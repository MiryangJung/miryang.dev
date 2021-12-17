import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const HomeProfileContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 300px;
  background-size: cover;
  background: url('/home/main.gif') no-repeat center, #05060c;
  border-radius: 15px;
  padding: 25px;
`

export const Name = styled.span`
  font-weight: 700;
  ${mq()({
    fontSize: ['30px', '35px'],
  })}
`

export const Description = styled.span`
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
    color: var(--tx-sub-dark);
    font-size: 12px;
  }
`
