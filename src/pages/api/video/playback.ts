import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  playbackId: string | null
}

const playback = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    if (!body.url || body.url.split('.net')[0] !== 'https://arweave')
      res.status(400).json({ playbackId: null })
    const id = body.url.split('.net/')[1]
    const livepeerKey = process.env.LIVEPEER_API_KEY
    const response = await fetch('https://livepeer.com/api/asset/import', {
      headers: {
        Authorization: `Bearer ${livepeerKey}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        url: body.url,
        name: id
      })
    })
    const result = await response.json()
    res.status(200).json({ playbackId: result.asset.playbackId })
  }
}

export default playback
