import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@200;400;600&family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Quick Tips by wsasouza" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
