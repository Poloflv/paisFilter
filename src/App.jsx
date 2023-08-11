import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <section className='font-nunito-sans bg-white dark:bg-very-dark-blue-bg min-h-screen transition-colors'>
      <Navbar/>
      <Home/>
    </section>
  )
}

export default App
