import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const WriteGbContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 40px);
  position: fixed;
  bottom: 30px;
  min-width: 320px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 5px 10px;
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

export const WriteGbContent = styled.input`
  outline: none;
  width: calc(100% - 70px);
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
  width: 60px;
  padding: 5px 10px 8px 13px;
  margin: 5px 0;
  background: var(--bg-main);
  border: 1px solid var(--tx-sub-dark);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
