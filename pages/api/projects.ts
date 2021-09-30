// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from './projects.json'

type Data = {
  name: string,
  date: string
}

type listData = Array<Data>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<listData>
) {
  res.status(200).json(data)
}
