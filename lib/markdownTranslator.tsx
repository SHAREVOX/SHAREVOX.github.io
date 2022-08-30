import addClasses from 'rehype-add-classes'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import { unified } from 'unified'

const markdownToHtml = async (markdownText: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse) // markdown -> mdast の変換
    .use(remark2rehype) // mdast -> hast の変換
    .use(addClasses, {
      a: 'text-blue-600 hover:text-blue-800 visited:text-purple-600',
    })
    .use(rehypeStringify) // hast -> html の変換
    .process(markdownText)
  return result.toString()
}

export default markdownToHtml
