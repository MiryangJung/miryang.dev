import styled from '@emotion/styled'

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0 20px;
  width: 100%;
`

export const TitleText = styled.span`
  font-size: 50px;
  font-weight: 800;
  background: linear-gradient(to right, var(--tx-accent-light), var(--tx-accent), var(--tx-sub));
  background-size: 200% 200%;
  animation: rainbow 2s ease-in-out infinite;
  transition: color 0.2s ease-in-out;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
`

export const DesText = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: var(--tx-sub-dark);
  word-break: keep-all;
  margin-top: 10px;
`
