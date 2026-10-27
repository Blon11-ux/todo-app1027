import { render, screen } from '@testing-library/react'
import TodoFilter from './TodoFilter'

test('active のときは「未完了」ボタンだけが太字', () => {
  render(<TodoFilter value="active" onChange={() => {}} />)
  expect(screen.getByRole('button', { name: '未完了' })).toHaveStyle({ fontWeight: 'bold' })
  expect(screen.getByRole('button', { name: 'すべて' })).toHaveStyle({ fontWeight: 'normal' })
  expect(screen.getByRole('button', { name: '完了' })).toHaveStyle({ fontWeight: 'normal' })
})
