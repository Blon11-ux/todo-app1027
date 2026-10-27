import { render, screen } from '@testing-library/react'
import NotFound from './not-found'

test('TODO 一覧へ戻るリンクの行き先は /', () => {
  render(<NotFound />)
  expect(screen.getByRole('link', { name: 'TODO 一覧へ戻る' })).toHaveAttribute('href', '/')
})
