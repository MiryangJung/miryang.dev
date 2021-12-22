import React from 'react'
import { ContentDo, ContentTitle, ResumeCardContainer } from './ResumeCard.style'
import resume from '../data/resume'

const ResumeOtherExCard = () => {
  return (
    <>
      {resume.otherExperience.map((item, index) => {
        return (
          <ResumeCardContainer key={index}>
            <ContentTitle>{item.name}</ContentTitle>
            {item.content.map((content, index) => (
              <React.Fragment key={index}>
                {content.url ? (
                  <a href={content.url} target="_blank" rel="noopener noreferrer">
                    <ContentDo>- {content.title}</ContentDo>
                  </a>
                ) : (
                  <ContentDo>- {content.title}</ContentDo>
                )}
              </React.Fragment>
            ))}
          </ResumeCardContainer>
        )
      })}
    </>
  )
}

export default ResumeOtherExCard
