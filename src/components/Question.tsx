import { FC } from 'react'
import { RadioInput, TextareaInput, TextInput } from './inputs'

interface Props {
  num: number
  question: string
}

const Question: FC<Props> = ({ num, question }) => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="text-2xl text-center text-black dark:text-white">
        {question}
      </h2>
      <div>
        <TextInput id={`answer-${num}`} label="Answer"></TextInput>
        <TextareaInput
          id={`answer-${num}`}
          label="Answer"
          placeholder="Test"
        ></TextareaInput>
        <RadioInput
          id={`answer-${num}`}
          label="Answer"
          selected={'One'}
          values={['One', 'Two', 'Three']}
        ></RadioInput>
      </div>
    </div>
  )
}

export default Question
