import { createModel } from '@rematch/core'
import { RootModel } from '.'

export type QuestionType = 'text' | 'textarea' | 'radio'

export interface Question {
  question: string
  answer?: string
  type: QuestionType
}

export interface Questionnaire {
  questions: Question[]
}

export const questionnaire = createModel<RootModel>()({
  state: { questions: [] } as Questionnaire,
  reducers: {
    setQuestions(state: Questionnaire, payload: Question[]) {
      return {
        ...state,
        questions: payload,
      }
    },
    setAnswer(
      state: Questionnaire,
      { numOfQuestion, payload }: { numOfQuestion: number; payload: string }
    ) {
      return {
        ...state,
        questions: state.questions.map((q, i) => ({
          ...q,
          answer: i === numOfQuestion ? payload : q.answer,
        })),
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
