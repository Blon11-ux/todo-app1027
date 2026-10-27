'use client'

import dynamic from 'next/dynamic'

const TodoApp = dynamic(() => import('./TodoApp'), {
  ssr: false,
  loading: () => <p>読み込み中…</p>,
})

export default TodoApp
