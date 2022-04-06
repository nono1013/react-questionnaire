import type { NextApiRequest, NextApiResponse } from 'next'
import { Question } from '../../src/models'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>
) {
  res.status(200).json([
    {
      question: 'Is this a question?',
      type: 'text',
    },
    {
      question: 'Is this a question too?',
      type: 'text',
    },
    {
      question: 'Is this also a question?',
      type: 'textarea',
    },
    {
      question: 'Is this a question?',
      type: 'radio',
    },
  ])
}
