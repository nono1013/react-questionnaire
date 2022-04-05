import { FC, useState } from 'react'
import Question from './Question'

const Questionnaire: FC = () => {
  const [state, setState] = useState({
    current: 0,
    questions: [
      {
        question: 'Is this a question?',
      },
      {
        question: 'Is this also a question?',
      },
      {
        question: 'Is this a question?',
      },
    ],
  })
  return (
    <div className="flex w-screen h-screen justify-center items-center p-">
      <Question question={state.questions[state.current].question}></Question>
    </div>
  )
}

export default Questionnaire
