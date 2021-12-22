import styled from '@emotion/styled'

export const ResumeCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
  & a:hover {
    text-decoration: underline;
  }
`

export const Company = styled.span`
  font-weight: 800;
  font-size: 20px;
`

export const Position = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #a2a2a2;
  margin: 5px 0;
`

export const ContentLine = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 5px 0;
  & a {
    margin-top: 10px;
    font-weight: 200;
    font-size: 12px;
    color: #a6a5a4;
  }
`

export const ContentTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #363436;
  margin-right: 2px;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const ContentDes = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #696969;
  margin-bottom: 5px;
`

export const ContentDo = styled.span`
  font-weight: 400;
  font-size: 13px;
  margin: 2px 0;
  color: #363436;
`

export const ContentTech = styled.span`
  font-weight: 200;
  font-size: 12px;
  color: #a2a2a2;
`

export const ContentTechHighlight = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #a2a2a2;
`
