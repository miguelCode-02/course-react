import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [catImageUrl, setCatImageUrl] = useState()

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

  return { catImageUrl: `${CAT_PREFIX_IMAGE_URL}${catImageUrl}` }
}
