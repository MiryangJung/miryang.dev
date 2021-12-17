import Script from 'next/script'
import metadata from '../data/metadata'

const GA = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${metadata.analytics.google}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${metadata.analytics.google}');
        `}
      </Script>
    </>
  )
}

export default GA
