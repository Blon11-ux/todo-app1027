import { render, screen, within } from '@testing-library/react'
import TodoList from './TodoList'

const todos = [
  { id: '1', text: '牛乳を買う', done: false },
  { id: '2', text: 'レポート提出', done: true },
]

test('0件なら「やることはありません」と表示し、リストは出さない', () => {
  render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />)
  expect(screen.getByText('やることはありません')).toBeInTheDocument()
  expect(screen.queryByRole('list')).not.toBeInTheDocument()
})

test('TODO の数だけ項目が表示される', () => {
  render(<TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />)
  const items = screen.getAllByRole('listitem')
  expect(items).toHaveLength(2)
  expect(items[0]).toHaveTextContent('牛乳を買う')
  expect(items[1]).toHaveTextContent('レポート提出')
})

test('1つ目の項目の中に、その TODO の削除ボタンがある', () => {
  render(<TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />)
  const items = screen.getAllByRole('listitem')
  expect(within(items[0]).getByRole('button')).toHaveAccessibleName('牛乳を買うを削除')
})
