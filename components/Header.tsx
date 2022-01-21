import { HeaderContainer, LogoImage } from './Header.style'
import Nav from './Nav'
import Link from 'next/link'

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />

      <Link href="/">
        <LogoImage src="/static/logo.jpg" alt="logo" />
      </Link>
    </HeaderContainer>
  )
}

export default Header
