import { products as initialProductos } from './mocks/Products'
import Products from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'

function App () {
  const [products] = useState(initialProductos)

  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice && (filter.category === 'all' || product.category === filter.category)
      )
    })
  }

  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
