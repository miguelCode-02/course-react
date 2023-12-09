import { navigate, Link } from '../Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Hola mundo </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit aut ut explicabo tenetu!</p>
      <Link to='/about'>Ir a sobre nosotros</Link>
    </>
  )
}
