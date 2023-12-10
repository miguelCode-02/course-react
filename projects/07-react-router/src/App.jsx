import { Router } from './Router.jsx'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import NoFoundPage from './pages/NoFound.jsx'
import SearchPage from './pages/Search.jsx'

/* export function navigate (href) {
  window.history.pushState({}, null, href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
} */

const ROUTER = [{
  path: '/',
  component: HomePage
}, {
  path: '/about',
  component: AboutPage
},
{
  path: '/search/:query',
  component: SearchPage
}]

function App () {
  return (
    <main>
      <Router router={ROUTER} defaultComponent={NoFoundPage}>
        <Route path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
