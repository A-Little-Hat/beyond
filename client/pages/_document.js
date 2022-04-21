import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import SiteConfig from '../site.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={SiteConfig.lang}>
        <Head>
          {/* base */}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="description" content={SiteConfig.description} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="icon.png" />
          <meta name="theme-color" content="#fff" />

          {/* facebook */}
          <meta property="og:url" content={SiteConfig.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={SiteConfig.title} />
          <meta property="og:description" content={SiteConfig.description} />

          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={SiteConfig.siteUrl} />
          <meta name="twitter:title" content={SiteConfig.title} />
          <meta name="twitter:description" content={SiteConfig.description} />


          {/* favicon */}
          <link rel="shortcut icon" href="/images/logo.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
