import { HeaderContainer, LogoImage } from './Header.style'
import Nav from './Nav'
import metadata from '../data/metadata'

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />

      <a href={metadata.repo}>
        <LogoImage src="/static/logo.png" alt="logo" />
      </a>
    </HeaderContainer>
  )
}

export default Header
