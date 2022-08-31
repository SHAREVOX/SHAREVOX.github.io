// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ReleaseData } from '@/components/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReleaseData[]>
) {
  res.status(200).json([
    {
      version: '0.1.0',
      descriptions: ['ファーストリリース'],
      contributors: [],
    },
  ])
}
