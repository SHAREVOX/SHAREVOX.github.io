import Head from 'next/head'

import Footer from '@/components/footer'
import Header from '@/components/header'

type Props = {
  title: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`SHAREVOX${title.length > 0 && ' | ' + title}`}</title>
        <meta
          name="description"
          content="無料で使える、声を作れるテキスト読み上げソフトウェア、SHAREVOX"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* 常時ヘッダーを表示していたいので、常にfalseにしておく */}
        <Header mainPageHeader={false} />
      </Head>

      {/* ref: https://tailwindcss.com/docs/installation */}
      <main
        style={{
          background: '#FAF5F0',
        }}
        className="pt-16 pb-10"
      >
        <div
          style={{
            background: '#ffffff',
          }}
          className="mx-16 mt-5 py-5 rounded-lg"
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
