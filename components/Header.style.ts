import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--bg-main);
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  ${mq()({
    padding: ['0 20px', '0 calc((100% - 700px)/2)'],
  })}
`

export const LogoImage = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  border-radius: 100%;
`
