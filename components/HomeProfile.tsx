import { Description, HomeProfileContainer, LearnMore, Name } from './HomeProfile.style'
import Link from 'next/link'
import metadata from '../data/metadata'

const HomeProfile = () => {
  return (
    <HomeProfileContainer>
      <Name>{metadata.home.name}</Name>
      <Description>{metadata.home.description}</Description>
      <LearnMore>
        <Link href="/about" passHref>
          Learn more
        </Link>
      </LearnMore>
    </HomeProfileContainer>
  )
}

export default HomeProfile
