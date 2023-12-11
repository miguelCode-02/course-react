import { render, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Router } from '../Router.jsx'
import { getCurrentPath } from '../utils.js'

vi.mock('../utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render the default component when no route matches', () => {
    const { getByText } = render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValueOnce('/about')
    const routes = [
      {
        path: '/',
        component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        component: () => <h1>About</h1>
      }
    ]

    const { getByText } = render(<Router router={routes} />)
    expect(getByText('About')).toBeTruthy()
  })
})
