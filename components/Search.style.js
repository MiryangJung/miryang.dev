import styled from '@emotion/styled'

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid var(--bg-main);
  background: var(--bg-sub);
  margin-bottom: 30px;
  &:hover {
    border-color: var(--tx-accent-light);
  }
`

export const Input = styled.input`
  width: calc(100% - 30px);
  background: none;
  outline: none;
  border: none;
`
