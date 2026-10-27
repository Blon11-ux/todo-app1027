export function countRemaining(todos) {
  return todos.filter((todo) => !todo.done).length
}

export function isValidTodoText(text) {
  const trimmed = text.trim()
  return trimmed.length > 0 && trimmed.length <= 50
}
export function countDone(todos) {
  return todos.filter((todo) => todo.done).length
}

export function createTodo(text) {
  return { id: crypto.randomUUID(), text, done: false }
}

export function addTodo(todos, text) {
  return [...todos, createTodo(text)]
}

export function toggleTodo(todos, id) {
  return todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
}

export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id)
}

export function filterTodos(todos, filter) {
  if (filter === 'active') return todos.filter((todo) => !todo.done)
  if (filter === 'done') return todos.filter((todo) => todo.done)
  return todos
}

export function clearDone(todos) {
  return todos.filter((todo) => !todo.done)
}

export function editTodo(todos, id, text) {
  const trimmed = text.trim()
  if (trimmed === '') return todos
  return todos.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo))
}

export function sortTodos(todos, order) {
  if (order === 'undone-first') return todos.toSorted((a, b) => Number(a.done) - Number(b.done))
  return todos
}
