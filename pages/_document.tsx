import Document, { Head, Html, Main, NextScript } from 'next/document'
import metadata from '../data/metadata'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            data-ad-client={metadata.ads.google}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
