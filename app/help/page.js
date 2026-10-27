export const metadata = {
  title: '使い方 | TODOアプリ',
}

export default function HelpPage() {
  return (
    <main className="container">
      <h1>使い方</h1>
      <ul>
        <li>入力欄にやることを書いて Enter で追加</li>
        <li>チェックボックスで完了 / 未完了を切り替え</li>
        <li>「削除」ボタンで消去</li>
      </ul>
    </main>
  )
}
