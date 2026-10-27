import { render, screen } from '@testing-library/react'
import AboutPage from './page'

test('見出しが表示される', () => {
  render(<AboutPage />)
  expect(screen.getByRole('heading', { level: 1, name: 'このアプリについて' })).toBeInTheDocument()
})

test('技術の箇条書きが2項目ある', () => {
  render(<AboutPage />)
  const items = screen.getAllByRole('listitem')
  expect(items).toHaveLength(2)
  expect(items[0]).toHaveTextContent('Next.js')
})
