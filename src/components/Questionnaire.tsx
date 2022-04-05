import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, store } from '../store'
import Question from './Question'

const Questionnaire: FC = () => {
  const { dispatch } = store
  const questions = useSelector(
    (root: RootState) => root.questionnaire.questions
  )
  const [state, setState] = useState({
    current: 0,
  })

  useEffect(() => {
    dispatch.questionnaire.getQuestions()
  }, [])

  return (
    <div className="flex w-screen h-screen justify-center items-center p-4 bg-gray-100 dark:bg-gray-900">
      {questions && questions.length > 0 && (
        <Question
          num={state.current}
          question={questions[state.current].question}
        ></Question>
      )}
    </div>
  )
}

export default Questionnaire
