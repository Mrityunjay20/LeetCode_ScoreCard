import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scorecard from './component/ScoreCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mt-24'>
      <Scorecard bgColor={"bg-[#282828]"}/>
      </div>
     
    </>
  )
}

export default App
