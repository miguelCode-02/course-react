import React, { useEffect, useState, Children } from 'react'
import { EVENTS } from './consts.js'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils.js'

export function Router ({ children, router = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPage, setCurrentPage] = useState(getCurrentPath())

  useEffect(() => {
    const onlocationChange = () => {
      setCurrentPage(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onlocationChange)
    window.addEventListener(EVENTS.POPSTATE, onlocationChange)

    return () => {
      window.addEventListener(EVENTS.POPSTATE, onlocationChange)
      window.removeEventListener(EVENTS.PUSHSTATE, onlocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = router.concat(routesFromChildren).filter(Boolean)

  console.log(routesToUse)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPage) return true
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPage)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
