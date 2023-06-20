import '../styles/globals.css'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react';
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
