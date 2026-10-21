import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-primary-light-1 dark:bg-primary-dark-1 h-dvh">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full w-full lg:w-1/2">
        </div>
      </div>
    </>
  )
}




export default App
