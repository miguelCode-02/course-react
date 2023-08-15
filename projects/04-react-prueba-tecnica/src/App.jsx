import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import './App.css'

export function App () {
  const { refreshFact, fact } = useCatFact()
  const { catImageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get random fact</button>
      {fact && <p>{fact}</p>}
      {catImageUrl && <img src={catImageUrl} alt={`Image extracted using the first word the ${fact}`} />}
    </main>
  )
}
