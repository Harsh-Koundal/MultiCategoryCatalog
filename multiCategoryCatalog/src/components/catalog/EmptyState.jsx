function EmptyState({ isDarkLayout }) {
  return (
    <div
      className={`rounded-xl border p-6 text-center ${
        isDarkLayout
          ? 'border-white bg-black text-slate-200'
          : 'border-slate-200 bg-slate-50 text-slate-700'
      }`}
    >
      <h3 className="text-base font-semibold">No items matched your search.</h3>
      <p className="mt-1 text-sm">
        Try a different keyword, switch category filters, or clear the search input.
      </p>
    </div>
  )
}

export default EmptyState
