import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateEvent from './pages/CreateEvent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CreateEvent/>
  )
}

export default App
