import { Link } from 'react-router-dom'
import { getProductRoute } from '../../utils/catalog'

function RelatedProducts({ selectedItem, relatedItems, isDarkLayout }) {
  const itemNameClass = isDarkLayout ? 'text-white' : 'text-slate-900'

  return (
    <div>
      <h3 className={`text-sm font-semibold ${itemNameClass}`}>
        Related {selectedItem.category}
      </h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {relatedItems.map((relatedItem) => (
          <Link
            key={relatedItem.itemname}
            to={getProductRoute(relatedItem.itemname)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              isDarkLayout
                ? 'border-white bg-black text-white hover:bg-neutral-900'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {relatedItem.itemname}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
