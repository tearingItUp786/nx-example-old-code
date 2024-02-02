import { render } from '@testing-library/react'

import Otherthing from './otherthing'

describe('Otherthing', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Otherthing />)
        expect(baseElement).toBeTruthy()
    })
})
