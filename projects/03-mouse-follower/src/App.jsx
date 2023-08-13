import './App.css'
import './index.css'
import { useEffect, useState } from 'react'
import logoReact from './assets/react.svg'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      document.body.className = 'no-cursor'
      window.addEventListener('mousemove', handleMove)
    }

    return () => {
      console.log('Cleanup')
      window.removeEventListener('mousemove', handleMove)
      document.body.className = ''
    }
  }, [enabled])

  return (
    <>
      <img
        src={logoReact} style={{
          position: 'fixed',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button type='button' onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir el puntero
      </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(false)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button type='button' onClick={() => setMounted(!mounted)}>
        {mounted ? 'Desmontar Componente' : 'Montar Componente'}
      </button>
    </main>
  )
}

export default App
