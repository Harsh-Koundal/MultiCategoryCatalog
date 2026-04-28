function CategoryFilters({
  categories,
  activeFilter,
  onFilterChange,
  isDarkLayout,
  catalogData,
}) {
  const filterInactiveClass = isDarkLayout
    ? 'border-white bg-black text-white hover:bg-neutral-900'
    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
  const filterActiveClass = isDarkLayout
    ? 'border-white bg-white text-black'
    : 'border-slate-900 bg-slate-900 text-white'

  return (
    <section className="mb-6 flex flex-wrap gap-2">
      {['All', ...categories].map((filter) => {
        const isActive = activeFilter === filter
        const count =
          filter === 'All'
            ? catalogData.length
            : catalogData.filter((item) => item.category === filter).length

        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              isActive ? filterActiveClass : filterInactiveClass
            }`}
          >
            {filter} ({count})
          </button>
        )
      })}
    </section>
  )
}

export default CategoryFilters
