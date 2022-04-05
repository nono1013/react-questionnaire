import { FC } from 'react'

interface Props {
  question: string
}

const Question: FC<Props> = ({ question }) => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="text-center">{question}</h2>
      <div>
        <input type="text" className="text-center border-1 border-gray-300" />
      </div>
    </div>
  )
}

export default Question
