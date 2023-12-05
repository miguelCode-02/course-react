import { products as initialProductos } from './mocks/Products'
import Products from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilter } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilter()

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(initialProductos)} />
      <Footer />
    </CartProvider>
  )
}

export default App
