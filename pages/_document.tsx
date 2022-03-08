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
