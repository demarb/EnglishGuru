import { useState, useEffect } from 'react'
import Header from './components/Header'
import DefinitionResult from './components/DefinitionResult'

function App() {

  // States
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

  // Functions
  function handleInputChange(e) {
    setSearchQuery(e.target.value)
  };

  function handleClick (e){
    e.preventDefault();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`)
      .then(res=>res.json())
      // .then(data=>console.log(data))
      .then(data=> {
          if (Array.isArray(data)) {
            return setSearchResult([...data[0].meanings, searchQuery])
          }else{
            return setSearchResult("Word not found")
          }
        }
      )
  }

  return (
    <>
      <Header searchQuery= {searchQuery} handleInputChange={handleInputChange} handleClick={handleClick}/>
      <DefinitionResult searchResult={searchResult}/>
    </>
  )
}

export default App
