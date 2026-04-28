import ProductCard from './ProductCard'
import { categoryStyles } from '../../constants/categoryStyles'

function ProductGrid({ visibleCategories, filteredItems, isDarkLayout }) {
  const categoryTitleClass = isDarkLayout ? 'text-white' : 'text-slate-900'
  const countBadgeClass = isDarkLayout
    ? 'border-white bg-black text-slate-200'
    : 'border-slate-200 bg-slate-100 text-slate-600'

  return (
    <section className="space-y-8">
      {visibleCategories.map((category) => {
        const items = filteredItems.filter((item) => item.category === category)
        if (!items.length) return null

        const dotClass = categoryStyles[category]?.dot ?? 'bg-slate-400'

        return (
          <div key={category}>
            <div className="mb-3 flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
              <h2 className={`text-xl font-semibold ${categoryTitleClass}`}>{category}</h2>
              <span className={`rounded-full border px-2 py-0.5 text-xs ${countBadgeClass}`}>
                {items.length} items
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item) => (
                <ProductCard key={item.itemname} item={item} isDarkLayout={isDarkLayout} />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProductGrid
