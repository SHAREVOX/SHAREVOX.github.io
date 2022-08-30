import '@/styles/globals.css'

import type { AppPropsWithLayout } from 'next/app'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
