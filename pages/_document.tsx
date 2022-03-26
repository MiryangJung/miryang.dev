import Document, { Head, Html, Main, NextScript } from 'next/document'
import metadata from '../data/metadata'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    const setThemeMode = `
        function getThemeMode() {
            const theme = window.localStorage.getItem('theme')
            return theme ? theme : 'dark'
        }
        document.body.dataset.theme = getThemeMode()
      `
    return (
      <Html lang="ko">
        <Head>
          <script
            data-ad-client={metadata.ads.google}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <meta name="naver-site-verification" content="82f309b7f779408e17321e7ce8bf752b34d02ed2" />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
