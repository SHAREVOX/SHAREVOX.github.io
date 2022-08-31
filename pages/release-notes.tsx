import { NextPage } from 'next/types'

import Layout from '@/components/layout'
import ReleaseCard from '@/components/releaseCard'
import { ReleaseData } from '@/components/types'
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
        {data && data.length > 0 && (
          <>
            <h1>リリースノート</h1>
            {data.map((d, idx) => (
              <ReleaseCard key={idx} data={d} />
            ))}
          </>
        )}
      </div>
    </Layout>
  )
}

export default ReleaseNotes
