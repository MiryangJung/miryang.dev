import Head from 'next/head'
import Header from './Header'
import { ContainerContainer, Main } from './Container.style'
import Footer from './Footer'
import GA from './GA'
import metadata from '../data/metadata'
import { useRouter } from 'next/router'

const Container = props => {
  const router = useRouter()
  const meta = {
    title: metadata.meta.title,
    description: metadata.meta.description,
    image: `${metadata.meta.url}/public/home/main.jpg`,
    url: `${metadata.meta.url}${router.asPath}`,
    type: 'website',
    twitter: metadata.meta.twitter,
    author: metadata.author,
    ...props.customMeta,
  }
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.author} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:site" content={meta.twitter} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <GA />
      <ContainerContainer>
        <Header />
        <Main>{props.children}</Main>
        <Footer />
      </ContainerContainer>
    </>
  )
}

export default Container
