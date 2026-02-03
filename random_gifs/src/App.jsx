import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
       {/* Header */}
      <div className="w-[600px] h-[50px] flex justify-center items-center border-2 bg-blue-400 rounded-xl">
        <h1 className="text-xl font-bold text-white">
          Random GIFs
        </h1>
      </div>
    </div>
     
     
    </>
  )
}

export default App
