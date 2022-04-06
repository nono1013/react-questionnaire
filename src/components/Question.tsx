import { FC } from 'react'
import { Question } from '../models'
import { store } from '../store'
import { RadioInput, TextareaInput, TextInput } from './inputs'

interface Props {
  num: number
  question: Question
}

const Question: FC<Props> = ({ num, question }) => {
  const { dispatch } = store

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="text-2xl text-center text-black dark:text-white">
        {question.question}
      </h2>
      <div>
        <TextInput
          id={`answer-${num}`}
          label="Answer"
          defaultValue={question.answer}
          onUpdate={(value) =>
            dispatch.questionnaire.setAnswer({
              numOfQuestion: num,
              payload: value,
            })
          }
        ></TextInput>
        <TextareaInput
          id={`answer-${num}`}
          label="Answer"
          placeholder="Test"
          defaultValue={question.answer}
          onUpdate={(value) =>
            dispatch.questionnaire.setAnswer({
              numOfQuestion: num,
              payload: value,
            })
          }
        ></TextareaInput>
        <RadioInput
          id={`answer-${num}`}
          label="Answer"
          defaultValue={question.answer ?? 'One'}
          values={['One', 'Two', 'Three']}
          onUpdate={(value) =>
            dispatch.questionnaire.setAnswer({
              numOfQuestion: num,
              payload: value,
            })
          }
        ></RadioInput>
      </div>
    </div>
  )
}

export default Question
