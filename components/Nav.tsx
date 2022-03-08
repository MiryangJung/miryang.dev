import { DropNavContainer, NavContainer } from './Nav.style'
import navLinks from '../data/navLinks'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Links = ({ setIsDropMenuOpen }) => {
  const router = useRouter()
  return (
    <>
      {navLinks.map(link => (
        <Link href={link.link} key={link.title} passHref>
          <a
            data-selected={router.pathname.includes(link.path) ? 'true' : 'false'}
            onClick={() => setIsDropMenuOpen(false)}
          >
            {link.title}
          </a>
        </Link>
      ))}
    </>
  )
}

const Nav = () => {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false)

  return (
    <>
      <NavContainer>
        <Links setIsDropMenuOpen={setIsDropMenuOpen} />
        <svg
          onClick={() => setIsDropMenuOpen(!isDropMenuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          height="38px"
          viewBox="0 0 24 24"
          width="38px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </NavContainer>
      <DropNavContainer visible={isDropMenuOpen}>
        <Links setIsDropMenuOpen={setIsDropMenuOpen} />
      </DropNavContainer>
    </>
  )
}

export default Nav
