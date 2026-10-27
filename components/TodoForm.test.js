import { render, screen } from '@testing-library/react'
import TodoForm from './TodoForm'

// 3つの探し方のうち、おすすめは getByRole。
// 「入力欄である」という役割と名前の両方を確かめられ、読み上げソフトの使い方とも一致する。
// getByPlaceholderText は、プレースホルダーが入力すると消える補助の文字なので、名前の代わりにはならない。
test('getByRole で入力欄を探せる', () => {
  render(<TodoForm onAdd={() => {}} />)
  expect(screen.getByRole('textbox', { name: 'やること' })).toBeInTheDocument()
})

test('getByLabelText で入力欄を探せる', () => {
  render(<TodoForm onAdd={() => {}} />)
  expect(screen.getByLabelText('やること')).toBeInTheDocument()
})

test('getByPlaceholderText で入力欄を探せる', () => {
  render(<TodoForm onAdd={() => {}} />)
  expect(screen.getByPlaceholderText('やることを入力')).toBeInTheDocument()
})
