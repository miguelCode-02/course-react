import './Filters.css'
import { useState } from 'react'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>price</label>
        <input type='range' id='price' name='price' min='0' max='1000' onChange={handleChangeMinPrice} />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Categoria</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>portatiles</option>
          <option value='smartphones'>celulares</option>
        </select>
      </div>

    </section>
  )
}
