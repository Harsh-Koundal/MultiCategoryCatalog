import { Link } from 'react-router-dom'
import { getProductRoute } from '../../utils/catalog'

function ProductCard({ item, isDarkLayout }) {
  const cardClass = isDarkLayout
    ? 'border-white bg-black'
    : 'border-slate-200 bg-white'
  const imageBgClass = isDarkLayout ? 'bg-neutral-900' : 'bg-slate-100'
  const itemNameClass = isDarkLayout ? 'text-white' : 'text-slate-900'
  const itemCategoryClass = isDarkLayout ? 'text-slate-300' : 'text-slate-500'
  const propPillClass = isDarkLayout
    ? 'border-white bg-neutral-900 text-slate-200'
    : 'border-slate-200 bg-slate-50 text-slate-600'
  const helperTextClass = isDarkLayout ? 'text-slate-300' : 'text-slate-600'

  return (
    <Link to={getProductRoute(item.itemname)}>
      <article
        className={`group cursor-pointer overflow-hidden rounded-xl border transition hover:-translate-y-0.5 hover:shadow-md ${cardClass}`}
      >
        <img
          src={item.image}
          alt={item.itemname}
          className={`h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02] ${imageBgClass}`}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />

        <div className="p-4">
          <h3 className={`text-base font-semibold ${itemNameClass}`}>{item.itemname}</h3>
          <p className={`text-xs ${itemCategoryClass}`}>{item.category}</p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.itemprops.slice(0, 2).map((prop) => (
              <span
                key={`${item.itemname}-${prop.label}`}
                className={`rounded-full border px-2 py-0.5 text-[11px] ${propPillClass}`}
              >
                {prop.label}: {prop.value}
              </span>
            ))}
          </div>

          <p className={`mt-3 text-xs font-medium ${helperTextClass}`}>
            Click to view full details
          </p>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard
