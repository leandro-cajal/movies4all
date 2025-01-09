import { useState } from 'react'
import Header from './components/Header'

import './App.css'
import MainNews from './components/mainNews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainNews />
    </>
  )
}

export default App
