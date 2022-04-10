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

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('questionnaire should be rendered and can change input', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <Questionnaire />
        </Provider>
      )
    })

    expect(await screen.findByText('Question 1?')).toBeVisible()

    const input = (await screen.findByDisplayValue(
      'test 1'
    )) as HTMLInputElement
    if (!input) fail('input not found')

    expect(input.value).toBe('test 1')
    fireEvent.input(input, { target: { value: 'test 2' } })

    expect(input.value).toBe('test 2')
  })

  // TODO: more test cases
})
