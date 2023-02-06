import { render } from '@testing-library/react'

import NewLib from './new-lib'

describe('NewLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NewLib count={0} setCount={jest.fn()} />
    )
    expect(baseElement).toBeTruthy()
  })
})
