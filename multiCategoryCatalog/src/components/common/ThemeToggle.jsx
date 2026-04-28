function ThemeToggle({ isDarkLayout, onToggle }) {
  const toggleTrackClass = isDarkLayout ? 'border-white bg-white' : 'border-black bg-black'
  const toggleKnobClass = isDarkLayout
    ? 'translate-x-6 bg-black'
    : 'translate-x-0 bg-white'

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle layout theme"
      className={`inline-flex h-8 w-14 shrink-0 items-center rounded-full border p-1 transition ${toggleTrackClass}`}
    >
      <span
        className={`h-5 w-5 rounded-full transition-transform duration-300 ${toggleKnobClass}`}
      />
    </button>
  )
}

export default ThemeToggle
