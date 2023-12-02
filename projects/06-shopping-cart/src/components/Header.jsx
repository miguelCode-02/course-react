import { Filters } from './Filters.jsx'
import { CartIcon } from './Icons.jsx'

export function Header ({ changeFilters }) {
  return (
    <header>
      <h1>react shop <CartIcon /></h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}
