export default function StarItem({ title, starred, onToggle }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={starred} onChange={onToggle} />
        {title}
      </label>
      <button onClick={onToggle} aria-label={`${title}をお気に入りに追加`}>
        ⭐
      </button>
    </li>
  )
}
