import { useState } from 'react'
import TestPage from './pages/test-page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<TestPage />     
    </>
  )
}

export default App
