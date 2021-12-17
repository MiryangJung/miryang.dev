import Header from './Header'
import { LayoutContainer, Main } from './Layout.style'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
