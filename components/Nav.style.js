import styled from '@emotion/styled'
import mq from '../styles/util/mq'
import { css } from '@emotion/react'

export const NavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--tx-sub-dark);
    padding: 0 10px;
    transition: 0.3s;
    ${mq()({
      fontSize: ['14px', '18px'],
      display: ['none', 'block'],
    })}
    &:hover {
      color: var(--tx-accent);
    }
  }
  svg {
    cursor: pointer;
    ${mq()({
      display: ['block', 'none'],
    })}
  }
`

const dynamicVisible = ({ visible }) => {
  if (visible) {
    return css`
      display: flex;
    `
  } else {
    return css`
      display: none;
    `
  }
}

export const DropNavContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 80px;
  left: 0;
  flex-flow: column nowrap;
  background: var(--bg-main);
  a {
    text-decoration: none;
    color: var(--tx-main);
    padding: 15px 30px;
    transition: 0.3s;
    &:hover {
      color: var(--tx-accent);
    }
  }
  ${dynamicVisible}
`
