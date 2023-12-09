import React, { useEffect, useState } from 'react'
import { EVENTS } from './consts.js'
import { match } from 'path-to-regexp'

export function Router ({ router = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
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

  let routeParams = {}

  const Page = router.find(({ path }) => {
    if (path === currentPage) return true
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPage)
    if (!matched) return false

    console.log(matched)

    routeParams = matched.params
    return true
  })?.component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
