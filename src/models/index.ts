import { Models } from '@rematch/core'
import { questionnaire } from './questionnaire'

export type { Question, Questionnaire, QuestionType } from './questionnaire'

export interface RootModel extends Models<RootModel> {
  questionnaire: typeof questionnaire
}
export const models: RootModel = { questionnaire }
