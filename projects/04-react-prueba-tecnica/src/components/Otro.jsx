import { useCatImage } from '../hooks/useCatImage'

export const Otro = () => {
  const fact = { fact: 'cat' }
  const { catImageUrl } = useCatImage(fact)

  return (
    <>
      {catImageUrl && <img src={catImageUrl} alt={`Image extracted using the first word the ${fact}`} />}
    </>
  )
}
