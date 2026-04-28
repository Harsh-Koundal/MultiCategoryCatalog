import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CatalogPage from './pages/CatalogPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [isDarkLayout, setIsDarkLayout] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name-asc')

  const toggleTheme = () => setIsDarkLayout((prev) => !prev)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <CatalogPage
            isDarkLayout={isDarkLayout}
            onToggleTheme={toggleTheme}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        }
      />
      <Route
        path="/product/:productName"
        element={
          <ProductDetailsPage
            isDarkLayout={isDarkLayout}
            onToggleTheme={toggleTheme}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
