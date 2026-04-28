import { Link, Navigate, useParams } from 'react-router-dom'
import { catalogData } from '../catalogData'
import { categoryStyles } from '../constants/categoryStyles'
import ThemeToggle from '../components/common/ThemeToggle'
import ProductCarousel from '../components/product/ProductCarousel'
import ProductSpecs from '../components/product/ProductSpecs'
import ProductInsights from '../components/product/ProductInsights'
import RelatedProducts from '../components/product/RelatedProducts'
import {
  buildGalleryImages,
  formatPriceINR,
  getProductByName,
  getProductPrice,
  getRelatedItems,
} from '../utils/catalog'

function ProductDetailsPage({ isDarkLayout, onToggleTheme }) {
  const { productName } = useParams()
  const decodedName = decodeURIComponent(productName)
  const selectedItem = getProductByName(catalogData, decodedName)

  if (!selectedItem) return <Navigate to="/" replace />

  const shellClass = isDarkLayout ? 'bg-black text-white' : 'bg-white text-black'
  const filterInactiveClass = isDarkLayout
    ? 'border-white bg-black text-white hover:bg-neutral-900'
    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
  const cardClass = isDarkLayout ? 'border-white bg-black' : 'border-slate-200 bg-white'
  const detailMetaClass = isDarkLayout ? 'text-slate-300' : 'text-slate-600'
  const itemNameClass = isDarkLayout ? 'text-white' : 'text-slate-900'
  const badgeClass =
    categoryStyles[selectedItem.category]?.badge ??
    'bg-slate-100 text-slate-700 border-slate-200'
  const galleryImages = buildGalleryImages(selectedItem)
  const relatedItems = getRelatedItems(catalogData, selectedItem)
  const priceLabel = formatPriceINR(getProductPrice(selectedItem))

  return (
    <main className={`min-h-screen w-full p-4 sm:p-6 ${shellClass}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className={`rounded-full border px-4 py-2 text-sm transition ${filterInactiveClass}`}
        >
          Back to catalog
        </Link>
        <ThemeToggle isDarkLayout={isDarkLayout} onToggle={onToggleTheme} />
      </div>

      <section className={`overflow-hidden rounded-2xl border shadow-sm ${cardClass}`}>
        <ProductCarousel
          item={selectedItem}
          isDarkLayout={isDarkLayout}
          galleryImages={galleryImages}
        />

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${badgeClass}`}
            >
              {selectedItem.category}
            </span>
            <span className={`text-xs ${detailMetaClass}`}>
              {selectedItem.itemprops.length} key specifications
            </span>
          </div>

          <h1 className={`mt-3 text-2xl font-bold ${itemNameClass}`}>
            {selectedItem.itemname}
          </h1>
          <p className={`mt-2 text-lg font-semibold ${itemNameClass}`}>{priceLabel}</p>
          <p className={`mt-2 text-sm leading-6 ${detailMetaClass}`}>
            Review complete product details and compare the key attributes below.
          </p>

          <ProductSpecs item={selectedItem} isDarkLayout={isDarkLayout} />
          <ProductInsights
            item={selectedItem}
            isDarkLayout={isDarkLayout}
            priceLabel={priceLabel}
            imageCount={galleryImages.length}
          />
          <div className="mt-6">
            <RelatedProducts
              selectedItem={selectedItem}
              relatedItems={relatedItems}
              isDarkLayout={isDarkLayout}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailsPage
