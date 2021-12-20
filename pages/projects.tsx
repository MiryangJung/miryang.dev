import Title from '../components/Title'
import projects from '../data/projects'
import ProjectCards from '../components/ProjectCard'
import Container from '../components/Container'
import metadata from '../data/metadata'

function Projectspage() {
  const customMeta = {
    title: `Projects - ${metadata.meta.title}`,
    description: '사이드프로젝트들을 기록합니다.',
  }
  return (
    <Container customMeta={customMeta}>
      <>
        <Title title="Projects" des={customMeta.description} />
        <ProjectCards projects={projects} />
      </>
    </Container>
  )
}

export default Projectspage
