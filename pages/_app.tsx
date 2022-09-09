import '@/styles/globals.css'

import type { AppPropsWithLayout } from 'next/app'
import { usePageView } from "@/lib/gtag";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  usePageView()
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
