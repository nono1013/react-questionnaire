import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import useQuestions from '../hooks/useQuestions'
import { RootState } from '../store'
import Button, {
  CheckIcon,
  EditIcon,
  NextIcon,
  PrevIcon,
} from './common/Button'
import Progress from './common/Progress'
import Spinner from './common/Spinner'
import QuestionElem from './QuestionElem'
import Summary from './Summary'

const Questionnaire: FC = () => {
  const { loading, error } = useQuestions()

  const questions = useSelector(
    (root: RootState) => root.questionnaire.questions
  )
  const [state, setState] = useState({
    currentPage: 0,
    completed: false,
  })

  const nextQuestion = () => {
    setState({
      ...state,
      currentPage: state.currentPage + 1,
    })
  }

  const prevQuestion = () => {
    setState({
      ...state,
      currentPage: state.currentPage - 1,
    })
  }

  const complete = () => {
    setState({
      ...state,
      completed: true,
    })
  }

  const back = () => {
    setState({
      ...state,
      completed: false,
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

  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center bg-gray-100 dark:bg-gray-900">
        {loading && <Spinner></Spinner>}
      </div>
    )
  }

  return (
    <div className="flex w-full h-full justify-center items-center px-4 bg-gray-100 dark:bg-gray-900">
      {questions && questions.length > 0 && !state.completed && (
        <QuestionElem
          num={state.currentPage}
          question={questions[state.currentPage]}
        ></QuestionElem>
      )}
      {state.completed && <Summary></Summary>}

      <div className="fixed right-0 bottom-0 md:bottom-auto m-4">
        {!state.completed && (
          <>
            {state.currentPage < questions.length - 1 && (
              <Button icon={NextIcon} onClick={nextQuestion}></Button>
            )}
            {state.currentPage === questions.length - 1 && (
              <Button
                icon={CheckIcon}
                onClick={complete}
                colorScheme="green"
              ></Button>
            )}
          </>
        )}
      </div>
      <div className="fixed left-0 bottom-0 md:bottom-auto m-4">
        {state.completed ? (
          <>
            <Button
              icon={EditIcon}
              onClick={back}
              colorScheme="yellow"
            ></Button>
          </>
        ) : (
          <>
            {state.currentPage > 0 && (
              <Button icon={PrevIcon} onClick={prevQuestion}></Button>
            )}
          </>
        )}
      </div>
      <div className="fixed bottom-0 m-4">
        {!state.completed && !loading && (
          <Progress
            current={state.currentPage + 1}
            total={questions.length}
          ></Progress>
        )}
      </div>
    </div>
  )
}

export default Questionnaire
