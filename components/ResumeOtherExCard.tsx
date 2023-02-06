import React from 'react';
import {
  ContentDo,
  ContentDoA,
  ContentTitle,
  ResumeCardContainer
} from './ResumeCard.style';
import resume from '../data/resume';

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
                  <ContentDoA
                    href={content.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - {content.title}
                  </ContentDoA>
                ) : (
                  <ContentDo>- {content.title}</ContentDo>
                )}
              </React.Fragment>
            ))}
          </ResumeCardContainer>
        );
      })}
    </>
  );
};

export default ResumeOtherExCard;
