import { EVENTS } from './consts.js'

export function navigate (href) {
  window.history.pushState({}, null, href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifierPressed = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    const isManagedableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManagedableEvent && !isModifierPressed) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
