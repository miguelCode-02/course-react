import { Suspense, lazy } from 'react'

import { Router } from './Router.jsx'
import NoFoundPage from './pages/NoFound.jsx'
import SearchPage from './pages/Search.jsx'
import Route from './Route.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
/* export function navigate (href) {
  window.history.pushState({}, null, href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
} */

const ROUTER = [{
  path: '/:lang/about',
  component: LazyAboutPage
},
{
  path: '/search/:query',
  component: SearchPage
}]

function App () {
  return (
    <main>

      <Suspense fallback={null}>
        <Router router={ROUTER} defaultComponent={NoFoundPage}>
          <Route path='/' component={LazyHomePage} />
          <Route path='/about' component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
