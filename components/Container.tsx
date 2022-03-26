import Head from 'next/head'
import { ContainerContainer, Main } from './Container.style'
import Footer from './Footer'
import GA from './GA'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
})

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <GA />
      <ContainerContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ContainerContainer>
    </>
  )
}

export default Container
