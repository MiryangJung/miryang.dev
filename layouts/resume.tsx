import Container from '../components/Container';
import { ResumeContent } from './resume.style';
import ResumeAbout from '../components/ResumeAbout';
import ResumeTitle from '../components/ResumeTitle.bs';
import ResumeCard from '../components/ResumeCard';
import ResumeOtherExCard from '../components/ResumeOtherExCard';
import ResumePresentation from '../components/ResumePresentation';
import { NextSeo } from 'next-seo';
import { meta } from '../data/Metadata.bs';

function ResumeLayout() {
  return (
    <Container>
      <NextSeo
        title="Resume"
        description="Resume of my work experience and skills"
        canonical={`${meta.url}/resume`}
        openGraph={{ url: `${meta.url}/resume` }}
      />
      <ResumeContent>
        <ResumeAbout />
        <ResumeTitle title={'👩🏻‍💻 Experience.'} />
        <ResumeCard />
        <ResumeTitle title={'💬 Presentation.'} />
        <ResumePresentation />
        <ResumeTitle title={'💻 Other Experience.'} />
        <ResumeOtherExCard />
      </ResumeContent>
    </Container>
  );
}

export default ResumeLayout;
