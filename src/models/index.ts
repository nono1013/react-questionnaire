import { Models } from '@rematch/core'
import { questionnaire } from './questionnaire'

export interface RootModel extends Models<RootModel> {
  questionnaire: typeof questionnaire
}
export const models: RootModel = { questionnaire }
