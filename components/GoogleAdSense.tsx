import Script from 'next/script'
import metadata from '../data/metadata'

const GoogleAdSense = () => {
  return (
    <>
      <Script
        data-ad-client={metadata.ads.google}
        async
        src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}
      />
    </>
  )
}

export default GoogleAdSense
