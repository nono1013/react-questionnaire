import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Summary: FC = () => {
  const questions = useSelector(
    (root: RootState) => root.questionnaire.questions
  )

  return (
    <div className="flex flex-col gap-4 justify-center text-center text-black dark:text-white">
      <h2 className="text-2xl">Summary</h2>
      <hr></hr>
      {questions.map((q) => (
        <>
          <h3 className="text-xl">{q.question}</h3>
          <p>{q.answer}</p>
          <hr></hr>
        </>
      ))}
    </div>
  )
}

export default Summary
