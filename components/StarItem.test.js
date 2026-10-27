import { render, screen } from '@testing-library/react'
import StarItem from './StarItem'

test('チェックボックスとボタンを名前で探せる', () => {
  render(<StarItem title="Next.js の勉強" starred={false} onToggle={() => {}} />)
  expect(screen.getByRole('checkbox', { name: 'Next.js の勉強' })).not.toBeChecked()
  expect(screen.getByRole('button', { name: 'Next.js の勉強をお気に入りに追加' })).toBeInTheDocument()
})
