import { Models } from '@rematch/core'
import { questionnaire } from './questionnaire'

export type { Question, Questionnaire } from './questionnaire'

export interface RootModel extends Models<RootModel> {
  questionnaire: typeof questionnaire
}
export const models: RootModel = { questionnaire }
