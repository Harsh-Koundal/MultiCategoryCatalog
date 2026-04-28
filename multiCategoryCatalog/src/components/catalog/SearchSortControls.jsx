function SearchSortControls({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  isDarkLayout,
}) {
  const inputClass = isDarkLayout
    ? 'border-white bg-black text-white placeholder:text-slate-400'
    : 'border-slate-300 bg-white text-slate-800 placeholder:text-slate-400'
  const helperTextClass = isDarkLayout ? 'text-slate-300' : 'text-slate-600'

  return (
    <section className="mb-6 grid gap-3 sm:grid-cols-2">
      <label className="flex flex-col gap-1.5">
        <span className={`text-xs font-medium ${helperTextClass}`}>Search products</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by item name, category, or property..."
          className={`rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 ${
            isDarkLayout ? 'focus:ring-white/40' : 'focus:ring-slate-300'
          } ${inputClass}`}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={`text-xs font-medium ${helperTextClass}`}>Sort results</span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className={`rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 ${
            isDarkLayout ? 'focus:ring-white/40' : 'focus:ring-slate-300'
          } ${inputClass}`}
        >
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
          <option value="category-asc">Category: A to Z</option>
          <option value="category-desc">Category: Z to A</option>
        </select>
      </label>
    </section>
  )
}

export default SearchSortControls
