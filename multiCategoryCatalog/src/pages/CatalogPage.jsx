import { useMemo } from 'react'
import { catalogData } from '../catalogData'
import ThemeToggle from '../components/common/ThemeToggle'
import CatalogHeader from '../components/catalog/CatalogHeader'
import CategoryFilters from '../components/catalog/CategoryFilters'
import SearchSortControls from '../components/catalog/SearchSortControls'
import ProductGrid from '../components/catalog/ProductGrid'
import EmptyState from '../components/catalog/EmptyState'
import { getCategories, getFilteredItems } from '../utils/catalog'

function CatalogPage({
  isDarkLayout,
  onToggleTheme,
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) {
  const shellClass = isDarkLayout ? 'bg-black text-white' : 'bg-white text-black'
  const categories = useMemo(() => getCategories(catalogData), [])

  const filteredItems = useMemo(
    () =>
      getFilteredItems({
        catalogData,
        activeFilter,
        searchQuery,
        sortBy,
      }),
    [activeFilter, searchQuery, sortBy],
  )

  const visibleCategories = activeFilter === 'All' ? categories : [activeFilter]

  return (
    <main className={`min-h-screen w-full p-4 sm:p-6 ${shellClass}`}>
      <CatalogHeader
        isDarkLayout={isDarkLayout}
        totalItems={catalogData.length}
        shownItems={filteredItems.length}
        categoryCount={categories.length}
        ThemeToggle={
          <ThemeToggle isDarkLayout={isDarkLayout} onToggle={onToggleTheme} />
        }
      />

      <CategoryFilters
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        isDarkLayout={isDarkLayout}
        catalogData={catalogData}
      />

      <SearchSortControls
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        sortBy={sortBy}
        onSortChange={onSortChange}
        isDarkLayout={isDarkLayout}
      />

      {!filteredItems.length ? (
        <EmptyState isDarkLayout={isDarkLayout} />
      ) : (
        <ProductGrid
          visibleCategories={visibleCategories}
          filteredItems={filteredItems}
          isDarkLayout={isDarkLayout}
        />
      )}
    </main>
  )
}

export default CatalogPage
