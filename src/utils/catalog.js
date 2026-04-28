export const getCategories = (catalogData) =>
  [...new Set(catalogData.map((item) => item.category))]

export const getFilteredItems = ({
  catalogData,
  activeFilter,
  searchQuery,
  sortBy,
}) => {
  const baseItems =
    activeFilter === 'All'
      ? catalogData
      : catalogData.filter((item) => item.category === activeFilter)

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const searchedItems = normalizedQuery
    ? baseItems.filter((item) => {
        const propsText = item.itemprops
          .map((prop) => `${prop.label} ${prop.value}`)
          .join(' ')
          .toLowerCase()

        return (
          item.itemname.toLowerCase().includes(normalizedQuery) ||
          item.category.toLowerCase().includes(normalizedQuery) ||
          propsText.includes(normalizedQuery)
        )
      })
    : baseItems

  return [...searchedItems].sort((a, b) => {
    if (sortBy === 'name-desc') return b.itemname.localeCompare(a.itemname)
    if (sortBy === 'category-asc') return a.category.localeCompare(b.category)
    if (sortBy === 'category-desc') return b.category.localeCompare(a.category)
    return a.itemname.localeCompare(b.itemname)
  })
}

export const buildGalleryImages = (item) => {
  if (!item) return []
  if (item.images && item.images.length > 1) return item.images

  const baseImage = item.image
  if (!baseImage) return []

  const queryJoiner = baseImage.includes('?') ? '&' : '?'
  return [
    baseImage,
    `${baseImage}${queryJoiner}view=2`,
    `${baseImage}${queryJoiner}view=3`,
  ]
}

export const getProductByName = (catalogData, productName) =>
  catalogData.find((item) => item.itemname === productName)

export const getRelatedItems = (catalogData, selectedItem) =>
  catalogData
    .filter(
      (item) =>
        item.category === selectedItem.category &&
        item.itemname !== selectedItem.itemname,
    )
    .slice(0, 4)

export const getProductRoute = (itemName) =>
  `/product/${encodeURIComponent(itemName)}`

const categoryBasePrice = {
  Cars: 2800000,
  Bikes: 320000,
  Phones: 85000,
  Computers: 140000,
}

export const getProductPrice = (item) => {
  if (!item) return 0
  if (typeof item.price === 'number') return item.price

  const base = categoryBasePrice[item.category] ?? 50000
  const complexityFactor = Math.max(1, item.itemprops?.length ?? 1)
  return base + complexityFactor * 12500
}

export const formatPriceINR = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
