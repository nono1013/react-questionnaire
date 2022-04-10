/** @jest-environment jsdom */

import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Questionnaire from './Questionnaire'
import { Provider } from 'react-redux'
import { store } from '../store'
import 'node-fetch'

describe('Questionnaire', () => {
  const server = setupServer(
    rest.get('/api/questions', (req, res, ctx) => {
      return res(
        ctx.json([
          {
            question: 'Question 1?',
            type: 'text',
            answer: 'test 1',
          },
          {
            question: 'Question 2?',
            type: 'textarea',
          },
        ])
      )
    })
  )

  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <Questionnaire />
        </Provider>
      )
    })
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  const changeInput = async (testId: string, to: string) => {
    const input = (await screen.findByTestId(testId)) as HTMLInputElement
    if (!input) fail('input not found')
    fireEvent.input(input, { target: { value: to } })
  }

  const clickButton = async (testId: string) => {
    const btn = (await screen.findByTestId(testId)) as HTMLInputElement
    if (!btn) fail('next button not found')

    act(() => {
      fireEvent.click(btn)
    })
  }

  it('questionnaire should be rendered with first question', async () => {
    expect(await screen.findByText('Question 1?')).toBeVisible()
    expect(await screen.findByDisplayValue('test 1')).toBeVisible()
  })

  it('can change input', async () => {
    const q1answer = 'test 2'
    await changeInput('text-input', q1answer)
    expect(await screen.findByDisplayValue(q1answer)).toBeVisible()
  })

  it('can go to next question and summary, summary shows answers', async () => {
    const q1answer = 'test 2'
    const q2answer = 'test 3'

    await changeInput('text-input', q1answer)

    await clickButton('next-button')
    expect(await screen.findByText('Question 2?')).toBeVisible()

    await changeInput('textarea-input', q2answer)

    await clickButton('complete-button')
    expect(await screen.findByText('Summary')).toBeVisible()
    expect(await screen.findByText(q1answer)).toBeVisible()
    expect(await screen.findByText(q2answer)).toBeVisible()
  })

  // TODO: add more test cases (prev, back, no anwer, etc.), add helper fns and data
})
