import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container">
      <h1>ページが見つかりません</h1>
      <Link href="/">TODO 一覧へ戻る</Link>
    </main>
  )
}
