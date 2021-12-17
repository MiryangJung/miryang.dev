import styled from '@emotion/styled'

export const AboutProfileContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  & .round-image {
    border-radius: 8px;
  }
`

export const ProfileText = styled.div`
  word-break: keep-all;
  padding: 0 20px;
  min-width: 300px;
  max-width: 400px;
  line-height: 25px;
`

export const ProfileTextSub = styled.span`
  color: var(--tx-sub-dark);
`

export const Resume = styled.a`
  padding: 10px 30px;
  background: var(--bg-sub);
  color: var(--tx-accent-light);
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: var(--tx-accent);
  }
`
