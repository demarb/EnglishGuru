import { useState } from 'react'
import Header from './components/Header'
import DefinitionResult from './components/DefinitionResult'
import { nanoid } from 'nanoid'

function App() {
  const [count, setCount] = useState(0)

  const [word, setWord] = useState(
    {
      "word": "",
      meaning: []
    }
  )

  return (
    <>
      <Header />
      <DefinitionResult />
    </>
  )
}

export default App
