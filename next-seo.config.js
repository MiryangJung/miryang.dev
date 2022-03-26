import metadata from './data/metadata'

const SEO = {
  titleTemplate: '%s | miryang.dev',
  defaultTitle: metadata.meta.title,
  description: metadata.meta.description,
  canonical: metadata.meta.url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: metadata.meta.url,
    site_name: metadata.meta.title,
    images: [
      {
        url: `${metadata.meta.url}/home/main.png`,
        width: 1280,
        height: 720,
        alt: `miryang.dev`,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: metadata.meta.twitter,
    handle: metadata.meta.twitter,
  },
}

export default SEO
