import styled from '@emotion/styled'

export const ProjectCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 20px;
`

export const ProjectCard = styled.div`
  width: 300px;
  height: 200px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover div {
    opacity: 0.9;
  }
  .round-image {
    border-radius: 5px;
  }
`

export const ProjectCardContent = styled.div`
  position: relative;
  top: -204px;
  width: 300px;
  height: 200px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-flow: column nowrap;
  transition: 0.5s;
  opacity: 0;
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
