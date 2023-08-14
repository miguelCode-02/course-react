import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url: imageUrl } = response
        setCatImageUrl(imageUrl)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {catImageUrl && <img src={CAT_PREFIX_IMAGE_URL + catImageUrl} alt={`Image extracted using the first word the ${fact}`} />}
    </main>
  )
}
