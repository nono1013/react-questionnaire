import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import useQuestions from '../hooks/useQuestions'
import { RootState } from '../store'
import NextButton from './common/NextButton'
import Progress from './common/Progress'
import Spinner from './common/Spinner'
import Question from './Question'

const Questionnaire: FC = () => {
  const { loading, error } = useQuestions()

  const questions = useSelector(
    (root: RootState) => root.questionnaire.questions
  )
  const [state, setState] = useState({
    current: 0,
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

  if (error) {
    return (
      <div className="flex w-screen h-screen justify-center items-center p-4 bg-gray-100 dark:bg-gray-900">
        <p className="text-center text-base text-black dark:text-white">
          {error}
        </p>
      </div>
    )
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center p-4 bg-gray-100 dark:bg-gray-900">
      {loading && <Spinner></Spinner>}
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
      <div className="fixed bottom-0 m-4">
        <Progress
          current={state.current + 1}
          total={questions.length}
        ></Progress>
      </div>
    </div>
  )
}

export default Questionnaire
