function ProductSpecs({ item, isDarkLayout }) {
  const detailMetaClass = isDarkLayout ? 'text-slate-300' : 'text-slate-600'
  const itemNameClass = isDarkLayout ? 'text-white' : 'text-slate-900'

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {item.itemprops.map((prop) => (
        <div
          key={`${item.itemname}-${prop.label}`}
          className={`rounded-xl border p-3 ${
            isDarkLayout ? 'border-white bg-neutral-900' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <p className={`text-xs ${detailMetaClass}`}>{prop.label}</p>
          <p className={`mt-1 text-sm font-semibold ${itemNameClass}`}>{prop.value}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductSpecs
