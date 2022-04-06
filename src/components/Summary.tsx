import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Summary: FC = () => {
  const questions = useSelector(
    (root: RootState) => root.questionnaire.questions
  )

  return (
    <div className="flex flex-col min-h-screen gap-4 p-4 justify-center text-center text-black dark:text-white">
      <h2 className="text-2xl">Summary</h2>
      <hr></hr>
      {questions.map((q, i) => (
        <div key={`summary-${i}`}>
          <h3 className="text-xl text-gray-600 dark:text-gray-400">
            {q.question}
          </h3>
          <p>{q.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default Summary
