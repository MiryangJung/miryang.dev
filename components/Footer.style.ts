import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const FooterContainer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 100px;
  padding: 30px;
  border-top: 1px solid var(--bg-sub);
  ${mq()({
    width: ['calc(100% - 40px)', 'calc(100% - calc((100% - 700px)))'],
  })}
`

export const SocialIconWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

export const SocialIcon = styled.img`
  width: 18px;
  height: auto;
  object-fit: contain;
  margin: 0 5px;
`
export const Copyright = styled.span`
  font-size: 14px;
  color: var(--tx-sub);
  margin-top: 10px;
`

export const BlogInfo = styled.a`
  font-size: 12px;
  color: var(--tx-sub-dark);
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`
