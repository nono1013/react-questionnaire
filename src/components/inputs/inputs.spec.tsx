/** @jest-environment jsdom */

import { getInput } from './input-factory'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('inputs', () => {
  it('factory should return text input field, and onUpdate should work', () => {
    const onUpdate = jest.fn()

    const wrapper = render(getInput(1, 'text', 'hello', onUpdate))
    const input = wrapper.container.querySelector('input')

    if (!input) fail('input not found')

    expect(input.value).toBe('hello')
    fireEvent.input(input, { target: { value: 'there' } })

    expect(input.value).toBe('there')
    expect(onUpdate).toBeCalledWith(1, 'there')
  })

  // TODO: test other input fields
})
