// src/pages/api/hello.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Return "Hello" as the response
  res.status(200).json({ message: 'Hello' });
}
