import { createModel } from '@rematch/core'
import { RootModel } from '.'

export interface Question {
  question: string
}

export interface Questionnaire {
  questions: Question[]
}

export const questionnaire = createModel<RootModel>()({
  state: { questions: [] } as Questionnaire,
  reducers: {
    setQuestions(state, payload: Question[]) {
      return {
        ...state,
        questions: payload,
      }
    },
  },
  effects: (dispatch) => ({
    async getQuestions() {
      const response = await fetch('/api/questions')
      const data = await response.json()
      dispatch.questionnaire.setQuestions(data)
    },
  }),
})
