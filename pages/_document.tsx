import { NextPage } from 'next'
import { Head, Html, Main, NextScript } from 'next/document'

const Document: NextPage = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
