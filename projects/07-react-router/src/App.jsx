import React, { useEffect, useState } from 'react'
import { EVENTS } from './consts.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import NoFoundPage from './pages/NoFound.jsx'

/* export function navigate (href) {
  window.history.pushState({}, null, href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
} */

function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onlocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onlocationChange)
    window.addEventListener(EVENTS.POPSTATE, onlocationChange)

    return () => {
      window.addEventListener(EVENTS.POPSTATE, onlocationChange)
      window.removeEventListener(EVENTS.PUSHSTATE, onlocationChange)
    }
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
