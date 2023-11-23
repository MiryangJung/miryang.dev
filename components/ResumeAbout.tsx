import {
  About,
  Contact,
  Job,
  Name,
  ResumeAboutContainer
} from './ResumeAbout.style';
import resume from '../data/resume';
import React from 'react';

const ResumeAbout = () => {
  return (
    <ResumeAboutContainer>
      <div className="flex flex-row items-center justify-between">
        <Name>{resume.name}</Name>
      </div>
      <Job>{resume.job}</Job>
      <Contact>{resume.contact}</Contact>

      <About>
        {resume.about.map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph} <br />
          </React.Fragment>
        ))}
      </About>
    </ResumeAboutContainer>
  );
};

export default ResumeAbout;
