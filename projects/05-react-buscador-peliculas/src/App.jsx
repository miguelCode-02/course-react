import './App.css'

import { useState, useCallback } from 'react'

import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
import { Movies } from './components/Movies'

import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)

  const { stateQuery, setStateQuery, error } = useQuery()
  const { movies, getMovies, loading } = useMovies({ search: stateQuery, sort })

  const debouncedGetMovies = useCallback(debounce(search => {
    console.log('search', search)
    getMovies({ search })
  }, 300), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
    getMovies({ search: stateQuery })
  }

  const handleChanged = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setStateQuery(newQuery)
    debouncedGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChanged} value={stateQuery} name='query' placeholder='Avengers, star wars' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
