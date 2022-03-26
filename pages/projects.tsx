import Title from '../components/Title'
import projects from '../data/projects'
import ProjectCards from '../components/ProjectCard'
import Container from '../components/Container'
import metadata from '../data/metadata'
import { NextSeo } from 'next-seo'

function Projectspage() {
  return (
    <Container>
      <NextSeo
        title="Projects"
        description="사이드프로젝트들을 기록합니다."
        canonical={`${metadata.meta.url}/projects`}
        openGraph={{ url: `${metadata.meta.url}/projects` }}
      />
      <Title title="Projects" des={`사이드프로젝트들을 기록합니다.`} />
      <ProjectCards projects={projects} />
    </Container>
  )
}

export default Projectspage
