'use client'

import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') {
      setError('やることを入力してください')
      return
    }
    onAdd(trimmed)
    setText('')
  }

  function handleChange(e) {
    setText(e.target.value)
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} placeholder="やることを入力" aria-label="やること" />
      <button type="submit">追加</button>
      {error && (
        <p role="alert" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </form>
  )
}
