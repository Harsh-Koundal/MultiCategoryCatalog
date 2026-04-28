function ProductInsights({ item, isDarkLayout, priceLabel, imageCount }) {
  const detailMetaClass = isDarkLayout ? 'text-slate-300' : 'text-slate-600'
  const itemNameClass = isDarkLayout ? 'text-white' : 'text-slate-900'
  const highlights = item.itemprops.length
    ? item.itemprops
    : [{ label: 'Info', value: 'Not listed' }]
  const primarySpec = item.itemprops?.[0]
    ? `${item.itemprops[0].label}: ${item.itemprops[0].value}`
    : 'Not listed'
  const metadataInsights = [
    { label: 'Price', value: priceLabel },
    { label: 'Model Name', value: item.itemname },
    { label: 'Category', value: item.category },
    { label: 'Total Specs Listed', value: `${item.itemprops.length}` },
    { label: 'Gallery Photos', value: `${imageCount}` },
    { label: 'Primary Highlight', value: primarySpec },
    { label: 'Availability', value: 'In stock' },
    { label: 'Warranty', value: 'Standard manufacturer warranty' },
  ]

  return (
    <div className="mt-6 space-y-4">
      <div>
        <h2 className={`text-lg font-semibold ${itemNameClass}`}>Product Insights</h2>
        <p className={`mt-1 text-sm ${detailMetaClass}`}>
          Complete specs for this {item.category.toLowerCase()}.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {metadataInsights.map((detail) => (
          <div
            key={`${item.itemname}-${detail.label}-meta`}
            className={`rounded-xl border p-3 ${
              isDarkLayout
                ? 'border-white bg-neutral-900'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            <p className={`text-xs ${detailMetaClass}`}>{detail.label}</p>
            <p className={`mt-1 text-sm font-semibold ${itemNameClass}`}>{detail.value}</p>
          </div>
        ))}

        {highlights.map((detail) => (
          <div
            key={`${item.itemname}-${detail.label}`}
            className={`rounded-xl border p-3 ${
              isDarkLayout
                ? 'border-white bg-neutral-900'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            <p className={`text-xs ${detailMetaClass}`}>{detail.label}</p>
            <p className={`mt-1 text-sm font-semibold ${itemNameClass}`}>{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductInsights
