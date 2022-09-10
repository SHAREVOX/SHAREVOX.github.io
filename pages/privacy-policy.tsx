import fs from 'fs'
import { NextPageWithLayout } from 'next'

import Layout from '@/components/layout'
import markdownToHtml from '@/lib/markdownTranslator'

export const getStaticProps = async () => {
  // もっと良い書き方がある気がするけど、ひとまずこれで:bow:
  const fileContent = fs.readFileSync('docs/privacy-policy.md', 'utf8')

  const htmlContent = await markdownToHtml(fileContent)
  return {
    props: {
      htmlContent,
    },
  }
}

type Props = {
  htmlContent: string
}

const PrivacyPolicy: NextPageWithLayout<Props> = ({ htmlContent }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="mx-10" />
  )
}

PrivacyPolicy.getLayout = (page) => (
  <Layout title="プライバシーポリシー">{page}</Layout>
)

export default PrivacyPolicy
