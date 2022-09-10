import '@/styles/globals.css'

import type { AppPropsWithLayout } from 'next/app'
import React from 'react'

import { GoogleAnalytics, usePageView } from '@/lib/gtag'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  usePageView()
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      {/*<GoogleAnalytics />*/}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
