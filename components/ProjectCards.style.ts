import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const ProjectCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 20px;
`

const dynamicBackground = ({ img }: { img: string }) => css`
  background-image: url(${img});
`
export const ProjectCard = styled.div`
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;
  border: 1px solid var(--tx-accent-light);
  cursor: pointer;
  &:hover div {
    opacity: 0.2;
  }
  ${dynamicBackground}
`

export const ProjectCardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-flow: column nowrap;
  transition: 0.5s;
`

export const ProjectCardTitle = styled.span`
  font-weight: 500;
  font-size: 24px;
  word-break: keep-all;
`

export const ProjectCardDes = styled.span`
  font-weight: 200;
  font-size: 16px;
  word-break: keep-all;
  margin-top: 20px;
`
