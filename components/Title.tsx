import { DesText, TitleContainer, TitleText } from './Title.style'

const Title = ({ title, des }: { title: string; des: string }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      <DesText>{des}</DesText>
    </TitleContainer>
  )
}

export default Title
