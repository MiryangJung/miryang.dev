import React from 'react'
import resume from '../data/resume'
import {
  Company,
  ContentDes,
  ContentDo,
  ContentLine,
  ContentTech,
  ContentTechHighlight,
  ContentTitle,
  Position,
  ResumeCardContainer,
} from './ResumeCard.style'

const ResumeCard = () => {
  return (
    <>
      {resume.experience.map(ex => (
        <ResumeCardContainer key={ex.company}>
          <Company>{ex.company}</Company>
          <Position>
            {ex.position} | {ex.period}
          </Position>
          {ex.content.map(c => (
            <React.Fragment key={c.title}>
              <ContentLine>
                <ContentTitle>{c.title}</ContentTitle>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noreferrer">
                    @
                  </a>
                )}
              </ContentLine>
              <ContentDes>{c.description}</ContentDes>
              {c.do.map(d => (
                <ContentDo key={d}>- {d}</ContentDo>
              ))}
              <ContentLine>
                <ContentTechHighlight>{c.techHighlight.join(', ')}</ContentTechHighlight>
                <ContentTech>, {c.tech.join(', ')}</ContentTech>
              </ContentLine>
            </React.Fragment>
          ))}
        </ResumeCardContainer>
      ))}
    </>
  )
}

export default ResumeCard
