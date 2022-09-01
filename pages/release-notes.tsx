import { NextPage } from 'next/types'

import Layout from '@/components/layout'
import ReleaseCard, { ReleaseData } from '@/components/releaseCard'
import config from '@/config'

export async function getServerSideProps() {
  const releaseDatas = await fetch(config.RELEASE_NOTE_URL)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res
    })
    .then((res) => res.json())
    .catch((err) => {
      console.error('failed to fetch releaseNotes', err)
      return []
    })

  return {
    props: {
      data: releaseDatas,
    },
  }
}

type Props = {
  data: ReleaseData[]
}

const ReleaseNotes: NextPage<Props> = ({ data }) => {
  return (
    <Layout title="リリースノート">
      <div className="mx-10">
        <h1>更新履歴</h1>
        {data && data.length > 0 ? (
          data.map((d, idx) => <ReleaseCard key={idx} data={d} />)
        ) : (
          <>
            <p>更新履歴の取得に失敗しました。</p>
            <p>
              更新履歴の元データは
              <a
                className="text-primary"
                href="https://github.com/SHAREVOX/sharevox/tags"
              >
                SHAREVOXのリポジトリ
              </a>
              をご参照ください。
            </p>
          </>
        )}
      </div>
    </Layout>
  )
}

export default ReleaseNotes
