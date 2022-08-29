import { remark } from 'remark'
import html from 'remark-html'

const markdownToHtml = async (markdownText: string): Promise<string> => {
  const result = await remark().use(html).process(markdownText)
  return result.toString()
}

export default markdownToHtml
