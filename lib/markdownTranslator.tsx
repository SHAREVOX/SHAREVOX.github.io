import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import { unified } from 'unified'

const markdownToHtml = async (markdownText: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse) // markdown -> mdast の変換
    .use(remark2rehype) // mdast -> hast の変換
    .use(rehypeStringify) // hast -> html の変換
    .process(markdownText)
  return result.toString()
}

export default markdownToHtml
