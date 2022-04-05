import { createModel } from '@rematch/core'
import { RootModel } from '.'

interface Question {
  question: string
}

interface Questionnaire {
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
      dispatch.questionnaire.setQuestions([
        {
          question: 'Is this a question?',
        },
        {
          question: 'Is this also a question?',
        },
        {
          question: 'Is this a question?',
        },
      ])
    },
  }),
})
