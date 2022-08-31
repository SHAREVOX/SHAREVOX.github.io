import Footer from '@/components/footer'
import Header from '@/components/header'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      {/* 常時ヘッダーを表示していたいので、常にfalseにしておく */}
      <Header mainPageHeader={false} title={title} />

      {/* ref: https://tailwindcss.com/docs/installation */}
      <main className="pt-16 pb-10 2xl:pt-24">
        <div className="mx-16 mt-5 py-5 rounded-lg bg-white">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
