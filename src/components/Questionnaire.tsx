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
    <div className="flex w-screen h-screen justify-center items-center p-4">
      {questions && questions.length > 0 && (
        <Question question={questions[state.current].question}></Question>
      )}
    </div>
  )
}

export default Questionnaire
