import { useRef, useState, useEffect } from 'react'

export function useQuery () {
  const [stateQuery, setStateQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = stateQuery === ''
      return
    }

    if (stateQuery === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (stateQuery.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numeros')
    }

    if (stateQuery.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [stateQuery])

  return { stateQuery, setStateQuery, error }
}
