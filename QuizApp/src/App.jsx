import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <h1>Let's Play the Quiz</h1>

        <Quiz/>
      </div>
    </>
  )
}

export default App
