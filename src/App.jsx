import { useState } from 'react'

import './App.css'
import Comments from './Comments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>Explore react core concept practice</h3>
      <Comments></Comments>
      
      
    </>
  )
}

export default App
