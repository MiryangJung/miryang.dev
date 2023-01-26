import Title from '../components/Title.bs';
import projects from '../data/projects';
import ProjectCards from '../components/ProjectCard';
import Container from '../components/Container';
import { meta } from '../data/Metadata.bs';
import { NextSeo } from 'next-seo';

function Projectspage() {
  return (
    <Container>
      <NextSeo
        title="Projects"
        description="외부 활동들을 기록합니다."
        canonical={`${meta.url}/projects`}
        openGraph={{ url: `${meta.url}/projects` }}
      />
      <Title title="Projects" des={`외부 활동들을 기록합니다.`} />
      <ProjectCards projects={projects} />
    </Container>
  );
}

export default Projectspage;
