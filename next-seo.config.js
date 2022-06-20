import { meta } from 'data/Metadata.bs'

const SEO = {
  titleTemplate: '%s | miryang.dev',
  defaultTitle: meta.title,
  description: meta.description,
  canonical: meta.url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: meta.url,
    site_name: meta.title,
    images: [
      {
        url: `${meta.url}/home/main.png`,
        width: 1280,
        height: 720,
        alt: `miryang.dev`,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: meta.twitter,
    handle: meta.twitter,
  },
}

export default SEO
