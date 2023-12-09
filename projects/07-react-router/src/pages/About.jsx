import { Link } from '../Link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1577539848914849792/oNix84Bc_400x400.jpg' alt='imagen sobre mi' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit aut ut explicabo tenetu!</p>
      </div>
      <Link to='/'>Ir a sobre MI</Link>
    </>
  )
}
