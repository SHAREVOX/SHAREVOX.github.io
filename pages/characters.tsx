import { NextPageWithLayout } from 'next'

import Layout from '@/components/layout'

type Props = {}

const Characters: NextPageWithLayout<Props> = ({}) => {
  return (
    <div className="mx-10">
      <h1>Coming Soon...</h1>
    </div>
  )
}

Characters.getLayout = (page) => (
  <Layout title="キャラクター一覧">{page}</Layout>
)

export default Characters
