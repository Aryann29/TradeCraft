import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl text-center font-bold  text-purple-400">
     <Button>TradeCraft</Button>
   
  </h1>
  )
}

export default App
