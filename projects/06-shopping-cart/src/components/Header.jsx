import { Filters } from './Filters.jsx'
import { CartIcon } from './Icons.jsx'

export function Header () {
  return (
    <header>
      <h1>react shop <CartIcon /></h1>
      <Filters />
    </header>
  )
}
