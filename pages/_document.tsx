import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

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

    const ga = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-MXZZX39DZ7');`;
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="naver-site-verification"
            content="82f309b7f779408e17321e7ce8bf752b34d02ed2"
          />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>

        <body>
          <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MXZZX39DZ7"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6660943261631856"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
