// @ts-ignore
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
      // TODO: fix here
      // 色は変わるのでひとまずこれで
      // ref: https://github.com/SHAREVOX/SHAREVOX.github.io/issues/2#issuecomment-1231365168
      a: 'text-primary',
    })
    .use(rehypeStringify) // hast -> html の変換
    .process(markdownText)
  return result.toString()
}

export default markdownToHtml
