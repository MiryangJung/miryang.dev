import React from 'react'
import { ContentDo, ContentTitle, ResumeCardContainer } from './ResumeCard.style'
import resume from '../data/resume'

const ResumeSkillCard = () => {
  return (
    <>
      {resume.skill.map((item, index) => {
        return (
          <ResumeCardContainer key={index}>
            <ContentTitle>{item.skill}</ContentTitle>
            {item.content.map((content, index) => (
              <ContentDo key={index}> - {content}</ContentDo>
            ))}
          </ResumeCardContainer>
        )
      })}
    </>
  )
}

export default ResumeSkillCard
