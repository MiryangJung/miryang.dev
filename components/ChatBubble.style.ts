import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicBackground = ({ color }) => css`
  background: ${color};
`

export const ChatBubbleContainer = styled.div`
  color: var(--tx-white);
  max-width: 90%;
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 10px 10px 0 10px;
  font-weight: 300;
  margin-top: 10px;
  word-break: break-all;
  line-height: 1.6;
  ${dynamicBackground}
`
