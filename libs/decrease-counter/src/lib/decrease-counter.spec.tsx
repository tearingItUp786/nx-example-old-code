import { render } from '@testing-library/react'

import DecreaseCounter from './decrease-counter'

describe('DecreaseCounter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DecreaseCounter onDecreaseCount={jest.fn()} />
    )
    expect(baseElement).toBeTruthy()
  })
})
