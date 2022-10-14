import { useState } from 'react'
import './styles/global.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-bold text-2xl'>Hello World!</h1>
      <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300'>
        Enviar
      </button>
    </>
  )
}