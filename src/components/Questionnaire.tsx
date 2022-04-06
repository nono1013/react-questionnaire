import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, store } from '../store'
import NextButton from './common/NextButton'
import Spinner from './common/Spinner'
import Question from './Question'

const Questionnaire: FC = () => {
  const { dispatch } = store
  const questions = useSelector(
    (root: RootState) => root.questionnaire.questions
  )
  const [state, setState] = useState({
    current: 0,
    loading: true,
  })

  const nextQuestion = () => {
    setState({
      ...state,
      current: state.current + 1,
    })
  }

  const prevQuestion = () => {
    setState({
      ...state,
      current: state.current - 1,
    })
  }

  useEffect(() => {
    dispatch.questionnaire.getQuestions()
    setState({
      ...state,
      loading: false,
    })
  }, [])

  return (
    <div className="flex w-screen h-screen justify-center items-center p-4 bg-gray-100 dark:bg-gray-900">
      {state.loading && <Spinner></Spinner>}
      {questions && questions.length > 0 && (
        <Question
          num={state.current}
          question={questions[state.current]}
        ></Question>
      )}
      <div className="fixed right-0 bottom-0 md:bottom-auto m-4">
        {state.current < questions.length - 1 && (
          <NextButton onClick={nextQuestion}></NextButton>
        )}
      </div>
      <div className="fixed left-0 bottom-0 md:bottom-auto m-4">
        {state.current > 0 && (
          <NextButton onClick={prevQuestion} reversed={true}></NextButton>
        )}
      </div>
    </div>
  )
}

export default Questionnaire
