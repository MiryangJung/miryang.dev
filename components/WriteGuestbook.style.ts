import styled from '@emotion/styled'
import { css } from '@emotion/react'
import mq from '../styles/util/mq'

export const WriteGbContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 40px);
  position: fixed;
  bottom: 30px;
  min-width: 320px;
  background: var(--bg-a5);
  border-radius: 25px 25px 50px 50px;
  padding: 5px 10px;
  ${mq()({
    width: ['calc(100% - 40px)', '768px'],
  })}
`

export const WriteGbLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`

const dynamicBackground = ({ color }) => css`
  background: ${color};
`

const dynamicBorder = ({ color }) => css`
  border-color: ${color};
`

export const WriteGbContent = styled.input`
  border: none;
  outline: none;
  width: calc(100% - 70px);
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 14px;
  color: var(--tx-white);
  ${dynamicBackground}
`

export const WriteGbSubmit = styled.button`
  outline: none;
  border-radius: 30px;
  width: 60px;
  padding: 5px 10px 8px 13px;
  margin: 5px 0;
  background: var(--bg-main);
  border: 1px solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${dynamicBorder}
  &:hover {
    background: var(--bg-sub);
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
