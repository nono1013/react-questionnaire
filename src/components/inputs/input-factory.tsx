import { RematchDispatch } from '@rematch/core'
import { QuestionType, RootModel } from '../../models'
import { RadioInput, TextareaInput, TextInput } from '.'

export const getInput = (
  numOfQuestion: number,
  questionType: QuestionType,
  defaultValue: string | undefined,
  onUpdate: (numOfQuestion: number, value: string) => {}
): JSX.Element => {
  switch (questionType) {
    case 'text':
      return (
        <TextInput
          id={`answer-${numOfQuestion}`}
          key={`answer-${numOfQuestion}`}
          label="Answer"
          defaultValue={defaultValue}
          onUpdate={(value) => onUpdate(numOfQuestion, value)}
        ></TextInput>
      )
    case 'textarea':
      return (
        <TextareaInput
          id={`answer-${numOfQuestion}`}
          key={`answer-${numOfQuestion}`}
          label="Answer"
          defaultValue={defaultValue}
          onUpdate={(value) => onUpdate(numOfQuestion, value)}
        ></TextareaInput>
      )
    case 'radio':
      return (
        <RadioInput
          id={`answer-${numOfQuestion}`}
          key={`answer-${numOfQuestion}`}
          label="Answer"
          defaultValue={defaultValue ?? 'One'}
          values={['One', 'Two', 'Three']}
          onUpdate={(value) => onUpdate(numOfQuestion, value)}
        ></RadioInput>
      )
    default:
      throw new Error('QuestionType does not exist')
  }
}
