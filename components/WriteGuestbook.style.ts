import styled from '@emotion/styled'
import mq from '../styles/util/mq'
import { css } from '@emotion/react'

export const WriteGbContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  position: fixed;
  bottom: 50px;
  min-width: 320px;
  ${mq()({
    padding: ['0 20px', '0 calc((100% - 700px)/2)'],
  })}
`

export const WriteGbLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const dynamicBackground = ({ color }) => css`
  background: ${color};
`

export const WriteGbContent = styled.input`
  outline: none;
  min-width: 260px;
  flex: 1;
  border: 1px solid var(--bg-sub);
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 14px;
  ${dynamicBackground}
  &:focus {
    border-color: var(--tx-sub-dark);
  }
`

export const WriteGbSubmit = styled.button`
  outline: none;
  border-radius: 30px;
  padding: 3px 15px 3px 18px;
  margin: 5px 0;
  background: var(--bg-main);
  border: 1px solid var(--tx-sub-dark);
  cursor: pointer;

  &:hover {
    border-color: var(--tx-accent);
  }
`

export const WriteGbColors = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: auto;
  padding-right: 80px;
  margin-top: 5px;
`

export const WriteGbColor = styled.div`
  padding: 10px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  ${dynamicBackground}
`
