import Title from '../components/Title'
import projects from '../data/projects'
import ProjectCards from '../components/ProjectCard'

function Projectspage() {
  return (
    <>
      <Title title="Projects" des="사이드프로젝트들을 기록합니다." />

      <ProjectCards projects={projects} />
    </>
  )
}

export default Projectspage
