import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ads } from '../data/Metadata.bs';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const setThemeMode = `
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      `;
    return (
      <Html lang="ko">
        <Head>
          <script
            data-ad-client={ads.google}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <meta
            name="naver-site-verification"
            content="82f309b7f779408e17321e7ce8bf752b34d02ed2"
          />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
