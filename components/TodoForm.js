'use client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') return
    onAdd(trimmed)
    setText('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="やることを入力"
        aria-label="やること"
      />
      <button type="submit">追加</button>
    </form>
  )
}
test('入力して「追加」を押すと、onAdd が入力した文字で呼ばれる', async () => {
  const user = userEvent.setup()
  const handleAdd = jest.fn()
  render(<TodoForm onAdd={handleAdd} />)
  await user.type(screen.getByRole('textbox', { name: 'やること' }), '牛乳を買う')
  await user.click(screen.getByRole('button', { name: '追加' }))
  expect(handleAdd).toHaveBeenCalledTimes(1)
  expect(handleAdd).toHaveBeenCalledWith('牛乳を買う')
})
test('Enter キーでも追加でき、前後の空白は取り除かれ、入力欄が空に戻る', async () => {
  const user = userEvent.setup()
  const handleAdd = jest.fn()
  render(<TodoForm onAdd={handleAdd} />)
  const input = screen.getByRole('textbox', { name: 'やること' })
  await user.type(input, '  レポート提出  {Enter}')
  expect(handleAdd).toHaveBeenCalledWith('レポート提出')
  expect(input).toHaveValue('')
})

test('空白だけなら onAdd は呼ばれない', async () => {
  const user = userEvent.setup()
  const handleAdd = jest.fn()
  render(<TodoForm onAdd={handleAdd} />)
  await user.type(screen.getByRole('textbox', { name: 'やること' }), '   {Enter}')
  expect(handleAdd).not.toHaveBeenCalled()
})


