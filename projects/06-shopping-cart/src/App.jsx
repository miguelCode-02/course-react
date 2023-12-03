import { products as initialProductos } from './mocks/Products'
import Products from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilter } from './hooks/useFilters'

function App () {
  const [products] = useState(initialProductos)
  const { filterProducts } = useFilter()

  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
      <Footer />
    </>
  )
}

export default App
