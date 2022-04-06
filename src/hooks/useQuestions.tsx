import { useEffect, useState } from 'react'
import { store } from '../store'

interface State {
  loading: boolean
  error: string | null
}

const useQuestions = () => {
  const { dispatch } = store
  const [state, setState] = useState<State>({
    loading: true,
    error: null,
  })

  useEffect(() => {
    const getQuestions = async () => {
      try {
        await dispatch.questionnaire.getQuestions()
        setState({
          ...state,
          loading: false,
          error: null,
        })
      } catch (err) {
        if (err instanceof Error) {
          setState({
            ...state,
            loading: false,
            error: `Error reading questions: ${err.message}`,
          })
        } else {
          setState({
            ...state,
            loading: false,
            error: 'Unknown error',
          })
        }
      }
    }
    getQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export default useQuestions
