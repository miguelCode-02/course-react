import React, { useEffect, useState } from 'react'

const NAVIGATION_EVENT = 'pushState'

function navigate (href) {
  window.history.pushState({}, null, href)
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Hola mundo </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit aut ut explicabo tenetu!</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1577539848914849792/oNix84Bc_400x400.jpg' alt='imagen sobre mi' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit aut ut explicabo tenetu!</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a sobre MI</button>
    </>
  )
}

function NoFoundPage () {
  return (
    <>
      <h1>404</h1>
      <p>Not found</p>
      <img src='https://img2.cgtrader.com/items/2931693/9fc2d417cd/large/this-is-fine-3d-model-obj-fbx.jpg' alt='this is fine' />
    </>
  )
}

function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onlocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onlocationChange)

    return () => window.removeEventListener(NAVIGATION_EVENT, onlocationChange)
  }, [])

  return (
    <main>
      {currentPage === '/' && <HomePage />}
      {currentPage === '/about' && <AboutPage />}
      {(currentPage !== '/about' && currentPage !== '/') && <NoFoundPage />}
    </main>
  )
}

export default App
