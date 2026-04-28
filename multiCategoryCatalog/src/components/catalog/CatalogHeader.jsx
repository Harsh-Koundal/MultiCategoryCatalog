function CatalogHeader({
  isDarkLayout,
  totalItems,
  shownItems,
  categoryCount,
  ThemeToggle,
}) {
  const headerClass = isDarkLayout
    ? 'border-white text-white'
    : 'border-slate-200 text-slate-900'
  const subtitleClass = isDarkLayout ? 'text-slate-300' : 'text-slate-600'
  const helperTextClass = isDarkLayout ? 'text-slate-300' : 'text-slate-600'
  const infoBorderClass = isDarkLayout ? 'border-white' : 'border-slate-300'

  return (
    <header className={`mb-6 border-b pb-4 ${headerClass}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Product Catalog</h1>
          <p className={`mt-1 text-sm ${subtitleClass}`}>
            Browse items across categories
          </p>
        </div>
        <div className="sm:pt-1">
          {ThemeToggle}
        </div>
      </div>

      <div className={`mt-3 flex flex-wrap items-center gap-2 text-xs ${helperTextClass}`}>
        <span className={`rounded-full border px-2.5 py-1 ${infoBorderClass}`}>
          Total items: {totalItems}
        </span>
        <span className={`rounded-full border px-2.5 py-1 ${infoBorderClass}`}>
          Showing: {shownItems}
        </span>
        <span className={`rounded-full border px-2.5 py-1 ${infoBorderClass}`}>
          Categories: {categoryCount}
        </span>
      </div>
    </header>
  )
}

export default CatalogHeader
