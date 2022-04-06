import { FC } from 'react'
import { Question } from '../models'
import { store } from '../store'
import { getInput } from './inputs/input-factory'

interface Props {
  num: number
  question: Question
}

const Question: FC<Props> = ({ num, question }) => {
  const { dispatch } = store

  return (
    <div className="flex flex-col h-screen gap-4 justify-center">
      <h2 className="text-2xl text-center text-black dark:text-white">
        {question.question}
      </h2>
      <div>{getInput(num, question, dispatch)}</div>
    </div>
  )
}

export default Question
