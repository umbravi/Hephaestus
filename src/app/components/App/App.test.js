import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const renderer = new ShallowRenderer()
  renderer.render(<App />, div)
  renderer.unmount()
})
