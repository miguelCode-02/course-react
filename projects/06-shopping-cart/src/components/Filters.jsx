import './Filters.css'
import { useState, useId } from 'react'
import { useFilter } from '../hooks/useFilters'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const { setFilters } = useFilter()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>price</label>
        <input type='range' id={minPriceFilterId} name='price' min='0' max='1000' onChange={handleChangeMinPrice} />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>portatiles</option>
          <option value='smartphones'>celulares</option>
        </select>
      </div>

    </section>
  )
}
