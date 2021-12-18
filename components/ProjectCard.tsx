import { Project } from '../lib/types'
import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardDes,
  ProjectCardsContainer,
  ProjectCardTitle,
} from './ProjectCards.style'
import Image from 'next/image'

const ProjectCards = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectCardsContainer>
      {projects.map(p => (
        <a href={p.url} target="_blank" rel="noreferrer" key={p.title}>
          <ProjectCard>
            <Image
              src={p.image}
              className="round-image"
              alt={p.title}
              width={300}
              height={200}
              objectFit="cover"
            />
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
