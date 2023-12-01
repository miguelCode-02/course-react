const API_KEY = import.meta.env.VITE_API_KEY

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  console.log()

  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.json()
    const movies = data.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
