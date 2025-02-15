import { useState } from 'react'
import DesignPage from './pages/design-test'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
< DesignPage />     
    </>
  )
}

export default App
