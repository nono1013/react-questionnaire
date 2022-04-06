import { RematchDispatch } from '@rematch/core'
import { Question, RootModel } from '../../models'
import { RadioInput, TextareaInput, TextInput } from '.'

export const getInput = (
  numOfQuestion: number,
  question: Question,
  dispatch: RematchDispatch<RootModel>
): JSX.Element => {
  switch (question.type) {
    case 'text':
      return (
        <TextInput
          id={`answer-${numOfQuestion}`}
          label="Answer"
          defaultValue={question.answer}
          onUpdate={(value) =>
            dispatch.questionnaire.setAnswer({
              numOfQuestion: numOfQuestion,
              payload: value,
            })
          }
        ></TextInput>
      )
    case 'textarea':
      return (
        <TextareaInput
          id={`answer-${numOfQuestion}`}
          label="Answer"
          placeholder="Test"
          defaultValue={question.answer}
          onUpdate={(value) =>
            dispatch.questionnaire.setAnswer({
              numOfQuestion: numOfQuestion,
              payload: value,
            })
          }
        ></TextareaInput>
      )
    case 'radio':
      return (
        <RadioInput
          id={`answer-${numOfQuestion}`}
          label="Answer"
          defaultValue={question.answer ?? 'One'}
          values={['One', 'Two', 'Three']}
          onUpdate={(value) =>
            dispatch.questionnaire.setAnswer({
              numOfQuestion: numOfQuestion,
              payload: value,
            })
          }
        ></RadioInput>
      )
    default:
      throw new Error('QuestionType does not exist')
  }
}
