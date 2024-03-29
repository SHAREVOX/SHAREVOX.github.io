import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

import DownloadModal from '@/components/downloadModal'
import { GA_ID } from '@/lib/gtag'
import firstViewImage from '@/public/sharevox-first-view.png'

type Props = {
  mainPageHeader: boolean
  title?: string
}

const Header: React.FC<Props> = ({ mainPageHeader, title }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const reverseOpenState = () => {
    setOpenMenu(!openMenu)
  }
  const menuClass = `flex justify-between 2xl:text-2xl ${
    openMenu || 'gmd:hidden'
  }`

  // ほかの要素が上に来ないように、z-indexを1000にしておく
  const headerBaseClass = 'z-[1000] mx-auto md:flex md:justify-around w-full'
  const headerButtonBaseClass =
    'block gmd:p-2 md:m-2 2xl:m-4 rounded font-semibold'
  const headerClass = mainPageHeader
    ? `${headerBaseClass} text-primary absolute ${
        openMenu ? 'bg-white' : 'bg-transparent'
      }`
    : `${headerBaseClass} text-white bg-primary fixed`
  const headerButtonClass = mainPageHeader
    ? `${headerButtonBaseClass} gmd:hover:text-white gmd:hover:bg-primary`
    : `${headerButtonBaseClass} gmd:hover:text-primary gmd:hover:bg-white`
  const downloadButtonClass = `md:mx-2 gmd:text-center rounded font-semibold py-2 px-4 2xl:px-6 2xl:py-3 ${
    mainPageHeader ? 'text-white bg-primary' : 'text-primary bg-white'
  }`
  const embeddedTitle = title
    ? `${title.length > 0 && title} | SHAREVOX`
    : `SHAREVOX`
  const url = 'https://www.sharevox.app'
  const description =
    '無料で使える、声を作れるテキスト読み上げソフトウェア、SHAREVOX'
  const [DownloadModalComponent, open, close, isOpen] = DownloadModal()

  return (
    <>
      <Head>
        <title>{embeddedTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={embeddedTitle} />
        <meta property="og:site_name" content="SHAREVOX" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={url + firstViewImage.src} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={url + firstViewImage.src} />
        <meta name="twitter:title" content="SHAREVOX" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:domain" content="www.sharevox.app" />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
              }}
            />
          </>
        )}
      </Head>

      <header className={headerClass}>
        <div className="px-4 flex justify-between items-center">
          <h1 className="text-xl 2xl:text-3xl font-semibold py-2">
            <Link href="/" className="decoration-0">
              <a>SHAREVOX</a>
            </Link>
          </h1>
          <div className="md:hidden">
            <button className="my-2" onClick={reverseOpenState}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className={openMenu ? 'hidden' : ''}
                  d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                />
                <path
                  className={openMenu ? '' : 'hidden'}
                  d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={menuClass}>
          <ul className="md:flex md:py-2 w-full md:items-center">
            <li className="border-b md:border-none">
              <Link href="/terms">
                <a className={headerButtonClass}>利用規約</a>
              </Link>
            </li>
            <li className="border-b md:border-none">
              <Link href="/characters">
                <a className={headerButtonClass}>キャラクター一覧</a>
              </Link>
            </li>
            <li className="border-b md:border-none">
              <Link href="/release-notes">
                <a className={headerButtonClass}>更新履歴</a>
              </Link>
            </li>
            <li>
              <div className="gmd:my-4 text-center">
                <button onClick={open} className={downloadButtonClass}>
                  ダウンロード
                </button>
              </div>
            </li>
          </ul>
        </div>
        <DownloadModalComponent />
      </header>
    </>
  )
}

export default Header
