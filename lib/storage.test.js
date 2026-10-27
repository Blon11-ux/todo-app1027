import { loadTodos, saveTodos } from './storage'

beforeEach(() => localStorage.clear())

describe('loadTodos', () => {
  test('何も保存されていなければ空の配列', () => {
    expect(loadTodos()).toEqual([])
  })

  test('保存されている TODO を読み込む', () => {
    const todos = [{ id: 'a', text: '牛乳を買う', done: false }]
    localStorage.setItem('todos', JSON.stringify(todos))
    expect(loadTodos()).toEqual(todos)
  })

  test('壊れた JSON なら空の配列', () => {
    localStorage.setItem('todos', '{壊れた')
    expect(loadTodos()).toEqual([])
  })
})

describe('saveTodos', () => {
  test('保存したものを loadTodos で読み戻せる', () => {
    const todos = [{ id: 'b', text: 'レポート提出', done: true }]
    saveTodos(todos)
    expect(loadTodos()).toEqual(todos)
  })
})
