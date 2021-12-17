import { Project } from '../lib/types'
import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardDes,
  ProjectCardsContainer,
  ProjectCardTitle,
} from './ProjectCards.style'

const ProjectCards = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectCardsContainer>
      {projects.map(p => (
        <a href={p.url} target="_blank" rel="noreferrer" key={p.title}>
          <ProjectCard img={p.image}>
            <ProjectCardContent>
              <ProjectCardTitle>{p.title}</ProjectCardTitle>
              <ProjectCardDes>{p.description}</ProjectCardDes>
            </ProjectCardContent>
          </ProjectCard>
        </a>
      ))}
    </ProjectCardsContainer>
  )
}

export default ProjectCards
